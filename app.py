"""
Serves a mock api to a fake in memory database.  The data structure
of the database is:

{
  "samples": {
    "735969": {
      "category_guess": "fake",
      "experiment_name": "dissection/56552",
      "fauxness": "0.66973040144",
      "sample_id": "735969",
      "filename": "myfile.faux",
      "active": true
     },
  },
  "files: ["735969"]
  "categories": ["fake"]
}

and should be provided as the file argument on startup.

To start up:

python app.py --port 8088 --debug fauxdb.json
"""


import argparse
import json
import os

from flask import Flask, request, abort, send_from_directory
from flask_restful import Resource, Api
from flask_cors import CORS

data = dict(
    files=[],
    categories=[],
    samples={}
)


def recompute_files_and_categories():
    """Update and cache the list of files and categories. """
    files = set()
    categories = set()
    for sample in data.get('samples').values():
        files.add(sample.get('filename'))
        categories.add(sample.get('category_guess'))
    data.update(files=sorted(files),categories=sorted(categories))


def parse_arguments():
    parser = argparse.ArgumentParser(description="Parameters for flask-mocker")
    parser.add_argument('-p', '--port', help='the port number for the server to run')
    parser.add_argument('file', help='the name of your JSON data file')
    parser.add_argument('--debug', dest='debug', action='store_true',
                        help='this runs the app in debug mode')
    parser.set_defaults(debug=False, port=5000)
    return parser.parse_args()


def load_csv_from_file(filename):
    if not os.path.exists(filename):
        raise FileNotFoundError("File '{}' not found!".format(filename))
    with open(filename, 'r') as f:
        data = json.load(f)
    return data


class Samples(Resource):
    """Index of all samples by sample_id.

    http://localhost:8088/samples
    {
        "samples": {
            "1007": {
                "filename": "file_7.faux",
                "active": true,
                "category_guess": "fake",
                "experiment_name": "observation67855/2",
                "fauxness": "0.679778493874",
                "sample_id": "1007"
            }
        }
    }
    """

    def get(self):
        return dict(samples=data.get('samples'))


class Sample(Resource):
    """An individual sample.

    ex:

    http://localhost:8088/sample/1007

    {
        "filename": "file_7.faux",
        "active": true,
        "category_guess": "fake",
        "experiment_name": "observation67855/2",
        "fauxness": "0.679778493874",
        "sample_id": "1007"
    }

    """

    @staticmethod
    def _get_sample(sample_id):
        return data['samples'].get(sample_id) or abort(404)

    def get(self, sample_id):
        return self._get_sample(sample_id)

    def put(self, sample_id):
        sample = self._get_sample(sample_id)
        sample.update(request.form.to_dict())
        recompute_files_and_categories()
        return sample

    def delete(self, sample_id):
        """ Soft delete.  Mark inactive. """
        sample = self._get_sample(sample_id)
        sample['active'] = False
        return {'message': 'Delete Successful!'}


class Categories(Resource):
    """ A list of categories.

    ex: http://localhost:8088/categories

    {
        "categories": [
            "ambiguous",
            "fake",
            "real"
        ]
    }

    """

    def get(self):
        return dict(categories=data.get('categories'))


class Category(Resource):
    """ An individual category and all of the samples in the category.
    Inactive samples *will not* be included in the sample list.

    ex: http://localhost:8088/category/fake

    {
        "category_name": "fake",
        "samples": [
            {
                "filename": "file_1.faux",
                "active": true,
                "category_guess": "fake",
                "experiment_name": "dissection/56552",
                "fauxness": "0.66973040144",
                "sample_id": "735969"
            },
        ]
    }

    """

    def get(self, category):
        if category not in data['categories']:
            abort(404)
        return dict(
            category_name=category,
            samples=[s for s in data['samples'].values()
                     if s['category_guess'] == category and s['active'] is True])


class Files(Resource):
    """ An index of files.

    ex: http://localhost:8088/files

    {
        "files": [
            "file_0.faux",
            "file_1.faux",
            "file_7.faux"
        ]
    }

    """

    def get(self):
        return dict(files=data.get('files'))


class File(Resource):
    """ An individual file and it's associated samples:

    ex: http://localhost:8088/file/file_0.faux

    {
        filename: "file_0.faux",
        samples: [
            {
                filename: "file_0.faux",
                active: true,
                category_guess: "fake",
                experiment_name: "examination.76377",
                fauxness: "0.651592972723",
                sample_id: "449491"
            }
        ]
    }

    """

    def get(self, filename):
        if filename not in data.get('files'):
            abort(404)
        return dict(
            filename=filename,
            samples=[s for s in data['samples'].values()
                     if s['filename'] == filename]
        )


class Database(Resource):
    """Return the underlying data structure, just a helpful introspection
    for devs, should not be treated as part of the public api.
    """

    def get(self):
        return data


def serve_static(filename='index.html'):
    return send_from_directory('static', filename)


def instantiate_app(app_name):
    app = Flask(app_name)
    app.add_url_rule('/', 'serve_static', serve_static)
    app.add_url_rule('/<string:filename>', 'serve_static', serve_static)
    api = Api(app)
    api.add_resource(Categories, '/categories')
    api.add_resource(Category, '/category/<string:category>')
    api.add_resource(Samples, '/samples')
    api.add_resource(Sample, '/sample/<string:sample_id>')
    api.add_resource(Files, '/files')
    api.add_resource(File, '/file/<string:filename>')
    api.add_resource(Database, '/database')
    return app


if __name__ == '__main__':
    args = parse_arguments()
    data = load_csv_from_file(args.file)
    recompute_files_and_categories()
    app = instantiate_app('fauxilizer5000')
    CORS(app)
    app.run(host='0.0.0.0', port=args.port, debug=args.debug)

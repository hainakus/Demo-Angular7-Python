# Fauxilzer 5000 UI

The Fantasy Analytics lab at Amyris has just acquired a new instrument, 
the Fauxlizer 5000.  The analytical results of this instrument have
been stored in a database, and made available via a REST api.

The api provides tooling around viewing and editing these analytical 
results.  The primary entity is the sample:
```json
{
    category_guess: "fake",
    experiment_name: "observation67855/2",
    sample_id: "1007",
    active: true,
    fauxness: "0.679778493874",
    filename: "file_7.faux"
}
```

Sample have a unique sample_id, are sorted into 3 categories, are
associated with a file and with an experiment, and can be soft 
deleted (represented as active=false).  The primary measurement 
is their "fauxness".

To take the test, set up "app.py" (as described in the top level
README of the provided zip file).

Once, run (at least as default), the app will be served on 
localhost:8088

The routes available are:
```
REST API endpoints:
/samples
/sample/<string:sample_id>
/categories
/category/<string:category>
/files
/file/<string:filename>

other:
/database
/static/<path:filename>
/<string:filename>
```
Any url from / that doesn't match one of the listed api endpoints
will be redirected to /static/, so "bar.css" will serve /static/bar.css.

All of the REST endpoints have get methods, and sample also supports
PUT and DELETE.

The task is to build a pretty front end, ideally using React,
that will allow users to peruse the sample results.  Please show 
the following:
 * an index of files.
 * show a histogram of the categories of fauxness for each file or 
   for all the samples for all of files.
 * show a table of samples and their values per file.
 * show a table of samples and their values per category.
 * ability to delete a sample.
   * samples where active=false are deleted.  They should
     not show up in any category or all samples, but they 
     should show up, struck out or otherwise indicated as deleted
     in the table of samples per file.
   * deleted samples should not show up in any histograms or 
     aggregrated statistics views.
 * ability to edit a sample
   * you should be able to change the fauxness, the category_guess,
     the experiment_name, the filename and the active status 
     for a sample.  Changes should be reflected in the db using 
     the PUT api.
   * you should be able to add arbitrary filenames.
   * you should not be able to add new categories.
   * note that edits and deletes will not persist through a server
     restart, as the db is entirely in memory.
   
The purpose of the test to to assess your ability to take an 
existing API and make a nice, modern, pretty front end to it.  We're 
looking for a creative, clean front end, and readable elegant
code.  

Add all necessary files to the static directory, add any source files
in the root directory, zip up the whole root folder and return 
that as your test submission.

* Feel free to use any libraries or tools you are familiar with.  
  If you add any 3rd party libraries, either add to the static
  directory or refer to an external CDN.
* If it's taking too long, optimize for whatever subset of the 
  requirements you feel comfortable completing looking good, and the 
  underlying code looking good and readable.
* Please provide your source code.  This should be separate from
  any generated artifacts (these should be in the static directory). 
  It's not a requirement that this be installable (webpack, etc) as long as the static 
  contents are functional as is.  Consider that a nice to have.
* Be creative.  Feel free to ask questions.  If you can think
  of any alternate way of presenting the data that you think might
  be useful, feel free to add it.
* If you find yourself having opinions about how the REST api's 
  could be improved, feel free to suggest them.
  
Final results should be uploaded as a zip directory, which once 
unpacked, should be runnable with your tool replacing the 
/static/index.html in the original zip file.

You can take up to 48 hours to complete this test.
Aim to spend 4-6 hours on it.  In all likelyhood, completing the full
description would take more than 4 hours.  Don't worry about being 
feature complete.  Rather, pick a subset of the features that you feel you can
complete in an evening and aim to do a solid job on that.  We're more 
interested in code quality then quantity.
  
     

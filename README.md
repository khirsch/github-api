# GitHunt

#### By [Katrina Hirsch](https://github.com/khirsch)

## Description

GitHunt is a web app that allows you to retrieve Github information by username.

## Setup/Installation Requirements

This app requires:

1. Node.js & NPM
2. Bower

To install:

1. Clone this repository to your desktop: `git clone https://github.com/khirsch/githunt.git`
2. Navigate to the 'githunt' folder
3. Create a file in the top level of the folder called '.env'
4. In the '.env' file, type the following: `exports.apiKey = "";`
5. Insert your Github API personal access token between the quotes (you can get one [here](https://github.com/settings/tokens))
6. Edit the ".gitignore" file to include your '.env' file (optional but recommended)
7. Once all of your changes have been saved, run these commands in the following order:
  * `$ npm install`
  * `$ bower install`
  * `$ gulp build`
  * `$ gulp serve`

## Known Bugs

https://github.com/khirsch/githunt/issues

## Support & Contact Details

Please send any questions or concerns to katrina.hirsch@gmail.com.

## Technologies Used

* HTML
* CSS (Bootstrap)
* SASS
* JavaScript (jQuery)
* Gulp
* Node.js (NPM/Bower)
* [Github API v3](https://developer.github.com/v3/)
* [Flaticon](http://flaticon.com)

### License

Copyright &copy; 2016 Katrina Hirsch

_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._

# One-Nexus Homepage

> The code that powers the One-Nexus homepage (built using One-Nexus)

## Requirements

* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Node.js](https://nodejs.org/en/download/)
* [Sass](http://sass-lang.com/install)

## Setup

#### LivIcons

* Download [LivIcons](https://codecanyon.net/item/livicons-evolution-for-jquery-the-next-generation-of-the-truly-animated-vector-icons/16131742)
* Copy the `LivIconsEvo` directory into the `vendor` directory
* Rename `LivIconsEvo/css/LivIconsEvo.css` to `LivIconsEvo/css/LivIconsEvo.scss`
* Open `LivIconsEvo/js/LivIconsEvo.defaults.js` and change the `pathToFolder` value on line **19** to `/assets/images/LivIcons/`

> You may need to slightly modify the above value depending on your setup

#### Install Git Submodules

* Within the One-Nexus-Homepage directory, run `git submodule update --init --recursive`

#### Install Node.js Modules

* Within the One-Nexus-Homepage directory, run `npm install`

## Run

* Within the One-Nexus-Homepage directory, run `grunt`
* Access the compiled app at [http://localhost:3000](http://localhost:3000)
* Changes to Sass, JS and Handlebars files will automatically be detected and recompiled on the fly
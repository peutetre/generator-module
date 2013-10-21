'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var GitHubApi = require('github');

var githubOptions = {
  version: '3.0.0'
};
var github = new GitHubApi(githubOptions);

var githubUserInfo = function (name, cb) {
  github.user.getFrom({
    user: name
  }, function (err, res) {
    if (err) {
      throw err;
    }
    cb(JSON.parse(JSON.stringify(res)));
  });
};

var ModuleGenerator = module.exports = function ModuleGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    console.log();
    console.log("Dont' forget to excute to add your saucelab username and token:");
    console.log("travis encrypt SAUCE_USERNAME=your-username --add");
    console.log("travis encrypt SAUCE_ACCESS_KEY=your-token --add");
    this.installDependencies({
        npm: true,
        bower: false
    });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(ModuleGenerator, yeoman.generators.Base);

ModuleGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  var prompts = [{
    type:'input',
    name:'githubUser',
    message:'What is your github username?'
  },{
    type:'input',
    name:'moduleName',
    message:'What is the name of the module?',
    default: path.basename(process.cwd())
  },
  {
    type:'input',
    name:'moduleDescription',
    message:'Can you give a description of your module?',
    default: ""
  },
  {
    type:'input',
    name:'dependencies',
    message:'Do you want to add dependencies? (sepatate modules with comma)',
    default: ""
  },
  {
    type:'input',
    name:'saucelabUser',
    message:'What it the saucelabs username for this module?',
    default: "empty"
  }];

  this.prompt(prompts, function (props) {
    this.githubUser = props.githubUser;
    this.moduleName = props.moduleName;
    this.moduleDescription = props.moduleDescription;
    this.saucelabUser = props.saucelabUser;
    this.dependencies = props.dependencies.split(',').filter(function (dep) {
        return dep.length > 0;
    });

    cb();
  }.bind(this));
};

ModuleGenerator.prototype.userInfo = function userInfo() {
  var done = this.async();

  githubUserInfo(this.githubUser, function (res) {
    this.realname = res.name;
    this.email = res.email;
    this.githubUrl = res.html_url;
    done();
  }.bind(this));
};

ModuleGenerator.prototype.lib = function lib() {
  this.mkdir('lib');
  this.template('lib/_index.js', 'lib/index.js');
  this.template('_package.json', 'package.json');
  this.template('_README.md', 'README.md');
  this.template('_LICENSE', 'LICENSE');
  this.copy('gitignore', '.gitignore');
};

ModuleGenerator.prototype.test = function test() {
  this.mkdir('test');
  this.template('test/_test.js', 'test/test.js');
  this.template('test/_index.html', 'test/index.html');
};

ModuleGenerator.prototype.ci = function saucelabs() {
  this.template('_Gruntfile.js', 'Gruntfile.js');
  this.copy('browsers.json', 'browsers.json');
  this.copy('travis.yml', '.travis.yml');
};

ModuleGenerator.prototype.example = function example() {
  this.mkdir('example');
  this.template('example/_example.js', 'example/example.js');
  this.template('example/_index.html', 'example/index.html');
};

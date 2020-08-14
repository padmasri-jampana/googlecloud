import webapp2
import jinja2

from google.appengine.ext import db
from google.appengine.api import users
from google.appengine.ext import ndb

import os
import urllib

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

template = JINJA_ENVIRONMENT.get_template('/templates/Fade.html')

class MainHandler(BaseHandler):

    def get(self):
    self.response.headers['Content-Type'] = 'text/html'
        self.response.write(template.render())

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/login', LoginHandler),
    ('/logout', LogoutHandler),
    ("/(?:[a-zA-Z0-9_-]+/?)", PageHandler),
    ('/signup', SignupHandler)
], debug=True)

# Kanchi Bhawalkr
# Homework 3 : Templates

import webapp2
import os
import logging
import jinja2


# defining variable
JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

# main hanlder to handle requests to all pages except for login
class MainHandler(webapp2.RequestHandler):
    def get(self):
        # retrieve path
        pagename = self.request.path[1:]
        
        # use the path to retreive the template : this will work for any another html file added to this application without changing the logic
        try:
        	template = JINJA_ENVIRONMENT.get_template('templates/%s'%pagename+'.html')
        	self.response.write(template.render())
        except:
        # this handles the first call to the application which doesnt consist of the filename after the hostname, render home template in this case
        	template = JINJA_ENVIRONMENT.get_template('templates/index.html')
        	self.response.write(template.render())


app = webapp2.WSGIApplication([
     (r'/.*', MainHandler) 
    
], debug=True)

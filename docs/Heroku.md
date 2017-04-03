## Getting Started with Heroku

Heroku
```bash
heroku create

# Deploy to Heroku server
git push heroku master

# Database on Heroku
heroku addons:create mongohq
# or
heroku addons:create mongolab

# OPTIONAL:

# Rename if you need to
heroku apps:rename <newname>

# Open Link in browser
heroku open

```

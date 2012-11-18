from django.conf.urls.defaults import patterns, url

urlpatterns = patterns('principal.views',
    url(r'^$', 'home', name='home'),
    url(r'^xhr_terminal/$', "xhr_terminal", name="xhr_terminal"),
    )
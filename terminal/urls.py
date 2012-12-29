from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'terminal.views.home', name='home'),
    # url(r'^terminal/', include('terminal.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
    #(r'^', include('principal.urls')),
    url(r'^$', 'principal.views.home'),
    url(r'^xhr_terminal/$', 'principal.views.xhr_terminal'),
    url(r'^xhr_login/$', 'principal.views.xhr_login'),
    url(r'^account/$', 'account.views.account'),
    url(r'^logout_acc/$', 'account.views.logout_acc'),
)

# Create your views here.
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.http import HttpResponseRedirect

from django.contrib.auth.models import User

def account(request):
    user = request.user
    if user.is_anonymous():
        return HttpResponseRedirect("/")
    else:
        cmx = {
            'accounts': user
        }
        return render_to_response('account/index.html', cmx, context_instance=RequestContext(request))

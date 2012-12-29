# Create your views here.
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.http import HttpResponseRedirect
from account.models import Account

from django.contrib.auth.models import User
from django.contrib.auth import logout

def account(request):
    user = request.user
    if user.is_anonymous():
        return HttpResponseRedirect("/")
    else:
        accounts = Account.objects.filter(user=user)
        cmx = {
            'name_account': user,
            'accounts' : accounts
        }
        return render_to_response('account/index.html', cmx, context_instance=RequestContext(request))

def logout_acc(request):
    logout(request)
    return HttpResponseRedirect("/")
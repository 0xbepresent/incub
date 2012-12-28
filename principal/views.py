# Create your views here.
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt

from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required

def home(request):
    user = request.user
    if user.is_anonymous():
        return render_to_response('principal/index.html', context_instance = RequestContext(request))
    else:
        return HttpResponseRedirect("/account")

@csrf_exempt
def xhr_terminal(request):
    """Se recibe el parametro enviado con JQuery y se transforma"""
    if request.is_ajax():
        txt = request.POST['texto']
        if txt == "who":
            message = "You are the root"
        elif txt == "about":
            message = "Terminal simulation in python!."
        elif txt == "hi":
            message = "Hi, I'm incub :D"
        elif txt == "help":
            message = "Commands:  about, clear, login, hi, who"
        else:
            message = "Command not found"
        return HttpResponse(message)
    else:
        return HttpResponse(status=400)

@csrf_exempt
def xhr_login(request):
    if request.is_ajax():
        user = request.POST['user']
        passw = request.POST['password']
        access = authenticate(username = user, password = passw)
        if access is not None:
            if access.is_active:
                login(request, access)
                #return HttpResponseRedirect('/account')
                return HttpResponse(1)
            else:
                return HttpResponse("User is not active")
        else:
            return HttpResponse("User and password incorrect")
    else:
        return HttpResponse(status=400)
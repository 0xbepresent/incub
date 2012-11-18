# Create your views here.
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

def home(request):
    return render_to_response('principal/index.html', context_instance = RequestContext(request))

@csrf_exempt
def xhr_terminal(request):
    """Se recibe el parametro enviado con JQuery y se transforma"""
    if request.is_ajax():
        txt = request.POST['texto']
        if txt == "who":
            message = "Tu eres el root"
        elif txt == "about":
            message = "Terminal simulation in python!."
        elif txt == "hi":
            message = "Hi, I'm incub :D"
        else:
            message = "Comando no encontrado"
        return HttpResponse(message)
    else:
        return HttpResponse(status=400)
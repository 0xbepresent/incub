# Create your views here.
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.http import HttpResponseRedirect, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from account.models import Account

from django.contrib.auth.models import User
from django.contrib.auth import logout

def account(request):
    """
    Main view of Account
    """
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
        
@csrf_exempt
def xhr_add_account(request):
    """
    Add account of the user
    """
    if request.is_ajax():
        user = request.user
        name = request.POST["name"]
        descr = request.POST["descr"]
        usracc = request.POST["usracc"]
        passacc = request.POST["passacc"]
        acc = Account(name=name, description=descr, user_account=usracc, pass_account=passacc, user=user)
        acc.save()
        return HttpResponse("Successfully saved")
    else:
        return HttpResponse(status=404)

@csrf_exempt
def xhr_delete_account(request):
    """
    Delete account of the user
    """
    if request.is_ajax():
        ida = request.POST['id']
        acc = Account.objects.get(pk=ida)
        acc.delete()
        return HttpResponse("Successfully deleted")
    else:
        return HttpResponse(status=404)

def logout_acc(request):
    """
    Logout the user
    """
    logout(request)
    return HttpResponseRedirect("/")
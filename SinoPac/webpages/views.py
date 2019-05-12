from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader


def index(request):
	template = loader.get_template('webpages/index.html')
	return HttpResponse(template.render({},request))
	# return render(request, 'webpages/webpages.html', {}) 




# Create your views here.

import json
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.template import loader
from webpages.models import BasicData


def index(request):
	d = BasicData.objects.all()
	print(d)
	template = loader.get_template('webpages/index.html')
	return HttpResponse(template.render({},request))
	# return render(request, 'webpages/webpages.html', {}) 

def basicDataQuery(request) :
	d = BasicData.objects.all()
	data = []
	for i in d:
		temp = {}
		temp['id'] = i.id
		temp['person_id'] = i.person_id
		temp['name'] = i.name
		temp['address'] = i.address
		temp['person_house_phone'] = i.person_house_phone
		temp['person_phone'] = i.person_phone
		temp['company'] = i.company
		temp['job_title'] = i.job_title
		temp['career'] = i.career
		temp['company_phone'] = i.company_phone
		temp['birthday'] = i.birthday
		temp['copAddress'] = i.company_address
		temp['description'] = i.description
		data.append(temp)

	return HttpResponse(json.dumps(data,indent=4,ensure_ascii=False),content_type="application/json")


def test(request):

	return HttpResponse("application/json")


# Create your views here.

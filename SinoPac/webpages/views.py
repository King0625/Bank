import json
import re
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.template import loader
from webpages.models import BasicData
from django.views.decorators.csrf import csrf_exempt
from django.forms.models import model_to_dict


def index(request):
	d = BasicData.objects.all()
	print(d)
	template = loader.get_template('webpages/index.html')
	return HttpResponse(template.render({},request))
	# return render(request, 'webpages/webpages.html', {}) 

@csrf_exempt
def basicDataQuery(request) :
	if request.method == 'GET':
		data = __basicDataQuery_GET()
		return HttpResponse(json.dumps(data,indent=4,ensure_ascii=False),content_type="application/json")
	else:
		__basicDataQuery_POST(request.body)
		return HttpResponse('POST SUCCESSFUL')

def __basicDataQuery_GET():
	d = BasicData.objects.all()
	data = []
	for i in d:
		temp = {}
		temp['id'] = i.id
		temp['person_id'] = i.identity
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
	return data
	
def __basicDataQuery_POST(data):
	
	data = json.loads(data,encoding=False)
	userid = data['id']
	del data['id']
	d = BasicData.objects.get(id=userid)

	if(len(data.keys()) > 1):
		# update sql
		for key, value in data.items():
			setattr(d,re.sub(r'person','',key),value)
		d.save()

	# print(json.dumps(model_to_dict(d),indent=4,ensure_ascii=False))
	
	pass



def test(request):

	return HttpResponse("application/json")


# Create your views here.

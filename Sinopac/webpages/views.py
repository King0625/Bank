import json
import re
import datetime
import webpages.models
from copy import deepcopy, copy
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, Http404
from django.template import loader
from webpages.models import BasicData,BankDepositData,UnionCreditCheckSystemInfo,Case
from django.views.decorators.csrf import csrf_exempt
from django.forms.models import model_to_dict
from django.db import connection



# __JUDGE_LIST = ['name','birthday','address','person_phone','person_house_phone','company','job_title','career']
__JUDGE_LIST = [
	{
		"item" : "name",
		"table" : [
			{
				"type" : "basic",
				"object" : BasicData,
				"col" : "name"
			},
			{
				"type" : "deposit",
				"object" : BankDepositData,
				"col" : "name"
			},
			{
				"type" : "union",
				"object" : UnionCreditCheckSystemInfo,
				"col" : "name"
			}
		]
	},
	{
		"item" : "birthday",
		"table" : [
			{
				"type" : "basic",
				"object" : BasicData,
				"col" : "birthday"
			},
			{
				"type" : "union",
				"object" : UnionCreditCheckSystemInfo,
				"col" : "birthday"
			}
		]
	},
	{
		"item" : "person_phone",
		"table" : [
			{
				"type" : "basic",
				"object" : BasicData,
				"col" : "person_house_phone"
			},
			{	
				"type" : "union",
				"object" : UnionCreditCheckSystemInfo,
				"col" : "contact_phone_number"
			}
		]
	},
	{
		"item" : "company_phone",
		"table" : [
			{
				"type" : "basic",
				"object" : BasicData,
				"col" : "company_phone"
			},
			{
				"type" : "union",
				"object" : UnionCreditCheckSystemInfo,
				"col" : "company_phone_number"
			}
		]
	},
	{
		"item" : "address",
		"table" : [
			{
				"type" : "basic",
				"object" : BasicData,
				"col" : "address"
			},
			{
				"type" : "union",
				"object" : UnionCreditCheckSystemInfo,
				"col" : "address"
			}
		]
	},
	{
		"item" : "company",
		"table" : [
			{
				"type" : "basic",
				"object" : BasicData,
				"col" : "company"
			},
			{
				"type" : "union",
				"object" : UnionCreditCheckSystemInfo,
				"col" : "company"
			}
		]	
	}
]

__DATE_COL__ = {
	"BankDepositData" : [
		"openning_date",
		"date_of_information",
		"new_batch_processing_day"
	],
	"UnionCreditCheckSystemInfo" : [
		"birthday",
		"recent_credit_problem",
		"identity_data_date",
		"birthdat_on_identity_system",
		"reissue_date",
		"extend_credit_data_date",
		"data_info_date",
		"data_process_date",
		"change_date",
		"birthday_on_credit_system",
	]
}

def index(request):
	template = loader.get_template('webpages/todo.html')
	return HttpResponse(template.render({},request))


def case(request):
	"""
	Return the case.html
	"""
	template = loader.get_template('webpages/index.html')
	return HttpResponse(template.render({},request))
	# return render(request, 'webpages/webpages.html', {}) 

def loan(request):
	template = loader.get_template('webpages/loan.html')
	return HttpResponse(template.render({}, request))

def checklist(request):
	template = loader.get_template('webpages/checklist.html')
	return HttpResponse(template.render({}, request))

def info(request):
	template = loader.get_template('webpages/information.html')
	return HttpResponse(template.render({}, request))

@csrf_exempt
def basicDataQuery(request) :
	# print(request.GET)
	if request.method == 'GET':
		try:
			identity = Case.objects.get(id=request.GET['id']).identity
		except:
			raise Http404('Case id error')
		try:
			BData = __basicDataQuery_GET(identity)
		except:
			raise Http404('Basic Data error')
		try:
			BaData = getBankDepositData(identity)
		except:
			raise Http404('Bank Deposit error')
		try:
			UData = getUnionCreditCheckSystemInfo(identity)
		except:
			raise Http404('union credit error')
		data = {}
		data['BasicData'] = BData
		data['BankDepositData'] = BaData
		data['UnionCreditCheckSystemInfo'] = UData
		# except:
		# 	raise Http404("This Person Does Not Exist")
		return HttpResponse(json.dumps(data,indent=4,ensure_ascii=False),content_type="application/json")
	else:
		# id = request.GET
		id = Case.objects.get(id=request.GET['id']).identity
		# print(id)
		# identity = Case.objects.get(id=request.POST['id']).identity
		__basicDataQuery_POST(id,request.body)
		return HttpResponse('POST SUCCESSFUL')

def __basicDataQuery_GET(GETid):
	print(GETid)
	try:
		"""
		QUERY FAILED GETid isn't exist
		"""
		d = BasicData.objects.get(identity=GETid)
	except:
		return {}
	data = model_to_dict(d)
	data['birthday'] = '%s-%s-%s' %(data['birthday'].year,data['birthday'].month,data['birthday'].day)
	return data
	
def __basicDataQuery_POST(id,data):
	
	data = json.loads(data,encoding=False)
	print(data)
	d = BasicData.objects.get(identity=id)
	if('basic_birthday' in data):
		day = data['basic_birthday'].split('-')
		print(day)
		date = datetime.date(int(day[0]),int(day[1]),int(day[2]))
		data['basic_birthday'] = date

	keys = data.keys()
	newData = {}
	for i in keys:
		newData[re.sub(r'basic_','',i)] = data[i]
	# print(newData)
	c = Case.objects.get(identity=id)
	setattr(c,'name',d.name)
		
	if(len(newData.keys())):
		# update sql
		for key, value in newData.items():
			setattr(d,key,value)
		d.save()

	# pass


@csrf_exempt
def ToDoListQuery(request):
	if request.method == 'GET':
		data = _ToDoListQuery()
		# print(json.dumps(data,indent=4,ensure_ascii=False))
		return HttpResponse(json.dumps(data,indent=4,ensure_ascii=False),content_type="application/json")
		pass
	elif request.method == 'POST':
		pass

def _ToDoListQuery():
	d = Case.objects.all()
	data = []
	for i in d:
		temp = model_to_dict(i)
		temp['progress'] = temp['progress'] * 100
		if(temp['progress'] < 100):
			data.append(temp)

	return data
	
def getBankDepositData(personal_identity):
	data = getDataFromDB(personal_identity,BankDepositData,'BankDepositData')
	print(json.dumps(data,indent=4,ensure_ascii=False))
	return data

def getUnionCreditCheckSystemInfo(personal_identity) : 
	data = getDataFromDB(personal_identity, UnionCreditCheckSystemInfo,'UnionCreditCheckSystemInfo')
	print(json.dumps(data,indent=4,ensure_ascii=False))
	return data	

def getDataFromDB(personal_identity, tb, tbName) : 
	data = tb.objects.get(identity=personal_identity)
	data = model_to_dict(data)
	for i in __DATE_COL__[tbName] :
		 data[i] = '%s-%s-%s' % (data[i].year, data[i].month, data[i].day) 
	return data


@csrf_exempt
def autoJudge(request):
	if request.method == 'GET' : 
		identity = Case.objects.get(id=request.GET['id']).identity
		data = autoJudge_GET(identity)
		return HttpResponse(json.dumps(data,indent=4,ensure_ascii=False),content_type="application/json")
	pass

def autoJudge_GET(id):
	basic = BasicData.objects.get(identity=id)
	basic = model_to_dict(basic)

	bn = BankDepositData.objects.get(identity=id)
	bn = model_to_dict(bn)

	un = UnionCreditCheckSystemInfo.objects.get(identity=id)
	un = model_to_dict(un)

	objects = {
		"basic" : basic,
		"deposit" : bn,
		"union" : un
	}

	[
		{
			"item" : "name",
			"result" : {
				"baisc" : "林志玲",
				"union" : "林至零"
			}
		}
	]

	judge_result = []
	temp = {}
	for i in __JUDGE_LIST:
		temp['item'] = i['item']
		temp['result'] = {}
		for j in i['table'] : 
			# try:
			if(objects['basic'][i['table'][0]['col']] != objects[j['type']][j['col']]):
				temp['result'][j['type']] = objects[j['type']][j['col']]
			# except:
			# 	print()
		# try:
		# 	print(json.dumps(temp,indent=4,ensure_ascii=False))
		# except TypeError as e:
		# 	pass
		judge_result.append(copy(temp))

	print(judge_result)

	for i in range(len(judge_result)):
		keys = judge_result[i]['result'].keys()
		print(keys)
		if(len(keys) != 0):
			for j in keys:
				# print(type(judge_result[i]['result'][j]))
				if(type(judge_result[i]['result'][j]) == datetime.date):
					judge_result[i]['result'][j] = '%s-%s-%s' %(judge_result[i]['result'][j].year, judge_result[i]['result'][j].month,judge_result[i]['result'][j].day)
	return judge_result

def test(request):
	c = Case.objects.get(id=2)
	
	print(model_to_dict(c))
	identity = c.identity
	print('case identity = %s' % identity)
	data = UnionCreditCheckSystemInfo.objects.get(identity='A548754877')
	setattr(c,'identity',data.identity)
	c.save()
	print(len(identity))
	print(len(data.identity))
	
	return HttpResponse(json.dumps({}),"application/json")


@csrf_exempt
def loanData(request):
	data = Case.objects.get(id=request.GET['id'])
	data = model_to_dict(data)
	newdata = {}
	newdata['name'] = data['name']
	newdata['identity'] = data['identity']
	return HttpResponse(json.dumps(data,indent=4,ensure_ascii=False),content_type="application/json")


# Create your views here.

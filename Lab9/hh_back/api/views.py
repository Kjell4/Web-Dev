from django.http import Http404, JsonResponse
from django.shortcuts import render

from api.models import Company, Vacancy

def company_list(request):
    companies = Company.objects.all()
    companies_json = [c.to_json() for c in companies]
    return JsonResponse(companies_json, safe=False)

def company_by_id(request, pk=None):
    company = Company.objects.get(id=pk)
    company_json = company.to_json()
    return JsonResponse(company_json)

def vacancies_by_company(request, pk=None):
    try:
        vacancies = Vacancy.objects.filter(company_id=pk)
    except Company.DoesNotExist:
        raise Http404("Company does not exist")

    vacancies_json = [p.to_json() for p in vacancies]

    return JsonResponse(vacancies_json, safe=False)

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [c.to_json() for c in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancy_by_id(request, pk=None):
    vacancy = Vacancy.objects.get(id=pk)
    vacancy_json = vacancy.to_json()
    return JsonResponse(vacancy_json)

def top_ten_vacancy(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_json = [c.to_json() for c in vacancies]
    return JsonResponse(vacancies_json, safe=False)
from django.urls import path

from api.views import company_list, company_by_id, vacancies_by_company, vacancy_list, vacancy_by_id, top_ten_vacancy


urlpatterns = [
   path("companies/", company_list),
   path("companies/<int:pk>/", company_by_id),
   path("companies/<int:pk>/vacancies/", vacancies_by_company),
   path("vacancies/", vacancy_list),
   path("vacancies/<int:pk>/", vacancy_by_id),
   path("vacancies/top_ten", top_ten_vacancy)
]
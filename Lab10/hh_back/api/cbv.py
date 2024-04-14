from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer


class CompanyListAPIView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)


class CompanyDetailAPIView(APIView):

    def get_object(self, pk=None):
        try:
            company = Company.objects.get(id=pk)
            return company
        except Company.DoesNotExist as e:
            return Response({"error": str(e)},
                            status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, pk=None):
        company = self.get_object(pk)
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    def delete(self, request, pk=None):
        company = self.get_object(pk)
        company.delete()
        return Response({"deleted": True})
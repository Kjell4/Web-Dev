from rest_framework import serializers

from api.models import Company, Vacancy


class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.TextField()
    city = serializers.CharField(max_length=255)
    address = serializers.TextField()

    def create(self, validated_data):
        instance = Company.objects.create(
            name=validated_data.get("name"),
            description = validated_data.get("description"),
            city = validated_data.get("city"),
            address = validated_data.get("address")
        )
        return instance

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name"),
        instance.description = validated_data.get("description"),
        instance.city = validated_data.get("city"),
        instance.address = validated_data.get("address")
        instance.save()
        return instance


class VacancySerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=50)

    class Meta:
        model = Vacancy
        fields = ("id", "name", "description", "salary")
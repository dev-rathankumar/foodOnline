from django.shortcuts import render


def vprofile(request):
    return render(request, 'vendor/vprofile.html')
import urllib
import csv
import json
import requests
from bs4 import BeautifulSoup

DataSourceURL = 'https://covid19tracker.ca/dist/api/controller/cases.php'

class SourceData:
    casePerPopulation = None
    lastUpdate = None
    totalCases = []
    cumulativeCases = []
    dailyCases = []
    casesByProvince = []
    deathsByProvince = []
    individualCases = []
    totalCaseProvince = []

    def __init__(self, casePerPopulation, lastUpdate, totalCases, cumulativeCases, dailyCases, casesByProvince, deathsByProvince, individualCases, totalCaseProvince):
        self.casePerPopulation = casePerPopulation
        self.lastUpdate = lastUpdate
        self.totalCases = totalCases
        self.cumulativeCases = cumulativeCases
        self.dailyCases = dailyCases
        self.casesByProvince = casesByProvince
        self.deathsByProvince = deathsByProvince
        self.individualCases = individualCases
        self.totalCaseProvince = totalCaseProvince

def main():
    response = requests.get(url=DataSourceURL)
    data = response.json()

    dictData = SourceData(
        data['casePerPopulation'],
        data['lastUpdate'],
        data['totalCases'],
        data['cumulativeCases'],
        data['dailyCases'],
        data['casesByProvince'],
        data['deathsByProvince'],
        data['individualCases'],
        data['totalCaseProvince'],
    )
    print(dictData.individualCases)


if __name__== "__main__":
    main()

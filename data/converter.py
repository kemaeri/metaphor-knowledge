import pandas as pd
import os
import glob

def convertFile(json, csv):
  df = pd.read_json(json)

  df.to_csv(csv)

  df = pd.read_csv(csv, usecols=["date","participant","group", "stimID","stimType","transparent", "idiom", "sentPos", "word","readingTimes","questionCorrect","participantAnswer","trial.started", "trial.stopped"])

  df = df[["participant","group","stimType","transparent","stimID", "idiom", "sentPos", "word","readingTimes","questionCorrect","participantAnswer","trial.started", "trial.stopped", "date"]]

  df.to_csv(csv, index=False)

dataFiles = glob.glob('**\*.json',recursive=True)

for file in dataFiles:
    filename = file.split("\\")[1].split("_m")[0] + ".csv"
    print(filename)
    convertFile(file,filename)
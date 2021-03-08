import json
import pandas

def read(filename):
    dict_data = dict()
    try:
        f_data = open(filename, 'r', encoding="utf-8")
        content_data = f_data.read()
        dict_data = json.loads(content_data)
        f_data.close()
    except FileNotFoundError:
        pass
    return dict_data

def write(dict_data):
    with pandas.ExcelWriter('stocks-simulation-888-20.xlsx') as writer:
        General = dict()
        for key, value in dict_data.items():
            if key == 'Trades':
                Trades = []
                for index in range(len(value)):
                    Trade = dict()
                    for key0, value0 in value[index].items():
                        if key0 == 'Trials':
                            pandas.json_normalize(value0).to_excel(writer, sheet_name='Trade%d' % (index + 1), index=False)
                        else:
                            Trade[key0] = value0
                    Trades.append(Trade)
                pandas.json_normalize(Trades).to_excel(writer, sheet_name='Trades', index=False)
            elif key == 'Moods':
                Moods = dict()
                for index in range(len(value)):
                    if isinstance(value[index], list):
                        for i in range(len(value[index])):
                            Moods['%d.%d' % (index + 1, i)] = value[index][i]
                    else:
                        Moods[index + 1] = value[index]
                pandas.json_normalize(Moods).to_excel(writer, sheet_name='Moods', index=False)
            else:
                General[key] = value
        pandas.json_normalize(General).to_excel(writer, sheet_name='General', index=False)

write(read('stocks-simulation-888-20.json'))

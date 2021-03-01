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
                        elif key0 == 'Mood':
                            Mood = dict()
                            for idx in range(len(value0)):
                                if isinstance(value0[idx], list):
                                    for i in range(len(value0[idx])):
                                        Mood['%d.%d' % (idx + 1, i)] = value0[idx][i]
                                else:
                                    Mood[idx + 1] = value0[idx]
                            pandas.json_normalize(Mood).to_excel(writer, sheet_name='Mood%d' % (index + 1), index=False)
                        else:
                            Trade[key0] = value0
                    Trades.append(Trade)
                pandas.json_normalize(Trades).to_excel(writer, sheet_name='Trades', index=False)
            else:
                General[key] = value
        pandas.json_normalize(General).to_excel(writer, sheet_name='General', index=False)

write(read('stocks-simulation-888-20.json'))

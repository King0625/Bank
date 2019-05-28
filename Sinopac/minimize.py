import re
import os
from os import walk

def traversal():
    indent = r'\t'
    for filePath, dirname, files in walk('.'):
        for file in files:
            file = os.path.join(filePath, file)
            if(re.search(r'.js',file) != None):
                file_type = '.js'
            elif(re.search(r'.html',file) != None):
                file_type = '.html'

            with open(file, 'r') as f:
                text = f.read()
                mini_text = re.sub(indent, '', text)

            with open(re.sub(file,'.min'+file_type), 'w') as f:
                f.write(mini_text)


if __name__ == '__main__':

    traversal()

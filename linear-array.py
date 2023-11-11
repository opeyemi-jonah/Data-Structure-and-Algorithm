names = ["Ope","Amanda"]
numbers = ["1",2, 3, "4", 5]

#Insert a value anywhere in the array
def insertNewValue(arr,newValue, index):
    if index < len(arr):
        arr.append(newValue)
        tempValue = arr[index]
        arr[index] = newValue
        arr[-1] = tempValue
        print (arr)
    else: print("Index should be less than the length of array which is", len(arr))
    
result = insertNewValue(names, "Jonah", -1)

#SEARCH

def searchValue(arr, value):
  x = 0
  for x in range(len(arr)):
    if arr[x] == value:
      return x
  return -1

names = ["Lion","Elephant","Giraffe","Alligator"]
index =   searchValue(names, "Lizard") 

if index != -1:
  print("Value found at position: ",index)
else: print("Value not found")

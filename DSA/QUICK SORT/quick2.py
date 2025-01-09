#let's see if I can still implement quick sort yay!!!!


def partition(array, start, end):
    i = start - 1
    pivot = array[end]

    for j in range(start, end):
        if array[j] < pivot:
            i+=1
            array[i], array[j] =   array[j], array[i]
    array[i+1], array[end] = array[end], array[i+1]
    
    return i + 1 
    

#recursive quick sort
def quicksort(array, start, end):
    if start< end: 
        pivot = partition(array, start, end)
        quicksort(array, start, pivot-1)
        quicksort(array, pivot + 1, end)

array = [1, 192, 223, 33, 2, 1, 93, 27]
quicksort(array, 0, len(array) - 1)
print(array)
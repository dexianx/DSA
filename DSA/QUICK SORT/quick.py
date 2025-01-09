

#lomuto's partition
def partition(array, start, end):
    i = start - 1
    pivot = array[end]

    for j in range(start, end):
        if array[j] < pivot:
            i+=1
            #swap
            array[i], array[j] = array[j], array[i]
    array[end], array[i+1] = array[i+1], array[end]
    return i + 1


#recursive quick sort
def quicksort(array, start, end):
    if start < end:
        pivot = partition(array, start, end)
        quicksort(array, start, pivot - 1)
        quicksort(array, pivot + 1, end)



array = [10, 27, 12, 11, 13]

quicksort(array, 0, len(array) - 1)
print(array)
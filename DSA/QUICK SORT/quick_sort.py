
#partition function 
def partition(array,start,end):
    pivot = array[end]
    i = start-1
    for j in range(start, end): 
        if( array[j] < pivot ):
            i+=1
            array[i], array[j] = array[j], array[i]

    array[i+1], array[end] = array[end], array[i+1]
    ## return the index the pivot value so it can be used in the quick sort funtion
    return i+1 


##Recursive quick sort function

def quicksort(array, start, end):
    if start < end:
        pivotPosition = partition(array, start, end)
        quicksort(array, start, pivotPosition - 1 )
        quicksort(array, pivotPosition + 1, end)




list = [11, 13, 21, 10]
quicksort(list, 0, len(list) - 1)
print(list)
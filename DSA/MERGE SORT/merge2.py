#Damn I don't even know where to start, but I know like it involves using a middle number then using recursion to go further

def mergesort(array, start, end):
    if start < end : 
        mid_value = (start + end)//2 
        mergesort(array, start, mid_value)
        mergesort(array, mid_value+1, end )
        #merge
        merge(array,start, mid_value, end)


def merge (array, start, mid_value, end):
    i = start 
    j = mid_value + 1 
    k = start
    temp = array.copy()
# so apparently the mid value is included that's why it is less than or equal to, so we don't need mid-value + 1
    while i <= mid_value  and j <= end:
        if array[i]  < array[j]:
            temp[k] = array[i] 
            i+=1
        else:
            temp[k] = array[j]
            j +=1 
        k+=1

    if i > mid_value:
        while j <= end:
            temp[k] = array[j]
            k+=1
            j+=1
    else:
        while i <= mid_value:
            temp[k] = array[i]
            k+=1
            i+=1

    for i in range(0, len(temp)):
        array[i] = temp[i]
    

array = [1,3, 53 , 21 , 10, 11]
mergesort(array, 0, len(array) - 1)
print(array)

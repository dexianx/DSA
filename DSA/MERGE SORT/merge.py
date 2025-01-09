
def merge(array, start, mid, end):
    i = start
    j = mid + 1
    k = start
    temp = array.copy()
    while(i <= mid and j <= end ):
        if array[i] <= array[j]:
            temp[k] = array[i]
            i+=1
        else:
            temp[k] = array[j]
            j+=1        
        k+=1
    if(i > mid):
        while(j <= end):
            temp[k] = array[j]
            j+=1
            k+=1
    else: 
        while(i <= mid):
            temp[k] = array[i]
            i+=1
            k+=1
    for value in range(start, end + 1):
        array[value] = temp[value]
    

def merge_sort(array, start, end):
    if(start < end):
        mid = (start + end )// 2
        #left
        merge_sort(array, start, mid)
        #right
        merge_sort(array, mid + 1, end)
        merge(array, start, mid, end )


my_list = [29, 38, 19, 10, 5, 2, 1, 6]
merge_sort(my_list, 0, len(my_list) - 1 )
print(my_list)
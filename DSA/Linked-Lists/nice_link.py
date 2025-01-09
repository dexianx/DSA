# class SinglyNode:
#     def __init__(self, val, next=None):
#         self.val = val
#         self.next = next

#     def __str__(self):
#         return str(self.val)
    

# #Define nodes 
# head = SinglyNode(500)
# A = SinglyNode(800)
# B = SinglyNode(10)
# C = SinglyNode(2)

# head.next = A
# A.next = B
# B.next = C

# #traverse and print linked lists
# def traverse_nodes(head):
#     curr = head
#     while curr:
#         print(curr)
#         curr = curr.next

# traverse_nodes(head)


# def traverse_nodes_stylishly(head):
#     curr = head
#     elements = []
#     while curr:
#         elements.append(str(curr.val))
#         curr = curr.next    
#     print('-->'.join(elements))

# traverse_nodes_stylishly(head)

# def find_node(head, value): 
#     curr = head

#     while curr:
#         if curr.val == value:
#             print(curr.val)
#             return 
#         curr = curr.next
#     print("Not Found")

    

# find_node(head)
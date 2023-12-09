#will learn about the implementation of a linked list in Python
#link: https://www.geeksforgeeks.org/python-linked-list/
'''
A linked list is a type of linear data structure similar to arrays. 
It is a collection of nodes that are linked with each other. 
A node contains two things first is data and second is a link that connects it with another node. 

List of methods:
Insert--> begin & end
delete/remove
traverse
size check
'''


# Create a class node
#  __init__ method that initializes the linked list with an empty head
class Node:
    def __init__(self, data) -> None:
        self.data = data
        self.next = None

    def insertAtBegin(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            # self.opeyemi = 0
            return
        else:
            new_node.next = self.head
            self.head = new_node
   
    def insertAtIndex(self, data, index):
        new_node = Node(data)
        current_node = self.head
        position = 0
        if position == index:
            self.insertAtBegin(data)
        else:
            while(current_node != None and position+1 != index):
                postion = position+1
                current_node = current_node.next
            if current_node != None:

                new_node.next = current_node.next
                current_node.next = new_node
            else:
                print("Index not present")

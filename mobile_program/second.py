from kivy.app import App
from kivy.uix.label import Label
from kivy.uix.button import Button
from kivy.uix.textinput import TextInput
from kivy.uix.boxlayout import BoxLayout

from kivy.core.window import Window

class Windoww(App):
    def __init__(self):
        super().__init__()
        self.control = False
        self.label = Label(text="Hello")
        self.label2 = Label(text="Hello")
        self.button = Button(text = "click", on_press = self.change_window) 

    def change_window(self,*args):
        if self.control:
            self.control = False
        else:
            self.control = True
        print("hello2")
        print(self.control)


    def build(self):
        box = BoxLayout(orientation='vertical')
        box.add_widget(self.label)
        box.add_widget(self.label2)
        box.add_widget(self.button)
        return box

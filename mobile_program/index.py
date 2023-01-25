from kivy.app import App
from kivy.lang import Builder
from kivy.uix.screenmanager import ScreenManager, Screen

# Create both screens. Please note the root.manager.current: this is how
# you can control the ScreenManager from kv. Each screen has by default a
# property manager that gives you the instance of the ScreenManager used.
Builder.load_string("""
<MenuScreen>:
    name: "menu"
    id: menu1
    BoxLayout:
        id: box
        spacing: 10
        orientation: 'vertical'
        BoxLayout:
            spacing: 10
            size_hint_y: 0.1
            Button:
                background_color: 0, 255, 0, 1
                text: 'Goto settings'
                on_press: 
                    root.manager.current = 'settings'
                    root.manager.transition.direction = 'left'
                    
                size_hint_x: 0.2
            Label:
                text: 'Quit'
                id: lbl1
                background_color: 0, 255, 0, 1
            Button:
                id: btn1
                text: 'prob'
                size_hint_x: 0.2
                on_press:
                    button.background_color = 0, 255, 0, 1
                    menu1.print__info()
        BoxLayout:
            Button:
                id: button
                text: 'Quit'


<SettingsScreen>:
    BoxLayout:
        Button:
            text: 'My settings button'
        Button:
            text: 'Back to menu'
            on_press: 
                root.manager.current = 'menu'
                root.manager.transition.direction = 'right'
""")

# Declare both screens
class MenuScreen(Screen):
    def __init__(self, adm):
        super().__init__()
        self.lab = adm.screens
        

    def print__info(self, *args):
        self.lab[0].ids['lbl1'].text += "g"
        self.lab[0].ids['button'].text += "g"
        self.lab[0].ids['button'].background_color = (0,0,0,1)

class SettingsScreen(Screen):
    pass

sm = ScreenManager()
win1 = MenuScreen(adm = sm)
win2 = SettingsScreen(name='settings')

class TestApp(App):
    def __init__(self):
        super().__init__()

    def build(self):
        # Create the screen manager
        sm.add_widget(win1)
        sm.add_widget(win2)
        return sm

if __name__ == '__main__':
    TestApp().run()
# -*- coding: utf-8 -*-

import os
import time
import sys
import shutil

# pip3 install python-telegram-bot

# s3ossconfig = {
#     "access_key_id" : 'AKIAXYKJWFYIXRSNOWU6',
#     "access_key_secret" : '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',
#     "bucket_name" : 'prod-app2',
#     "region_name":'ap-east-1',
# }

# access_key_id = s3ossconfig['access_key_id']
# access_key_secret = s3ossconfig['access_key_secret']
# bucket_name = s3ossconfig['bucket_name']
# region_name = s3ossconfig['region_name']
class MyFileControl:
    def __init__(self, name):
        self.name = name

    # # 按行读取文件，从底部往上读取
    # def read_file_reverse(filename):
    #     with open(filename, 'r') as file:
    #         # 将文件内容读取为列表，每个元素是文件的一行
    #         lines = file.readlines()
            
    #         # 倒序遍历列表，以实现逆序读取每行
    #         for line in reversed(lines):
    #             # 移除每行末尾的换行符并打印
    #             print(line.rstrip())

    # def read_file_reverse(filename):
    # # 以读取模式打开文件
    #     with open(filename, 'r') as file:
    #         # 将文件内容读取为列表，每个元素是文件的一行
    #         lines = file.readlines()

    #         # 倒序遍历列表，以实现逆序读取每行
    #         for line in reversed(lines):
    #             # 移除每行末尾的换行符并打印
    #             print(line.rstrip())    

    def test():
        # 以读取模式打开文件
            print("他发地方")  
class MyClass:
    # def __init__(self, name):
    #     self.name = name

    # def greet(self):
    #     print(f"Hello, {self.name}!")


    def read_file(path):
    # 以读取模式打开文件
        with open(path, 'r') as file:
            # 将文件内容读取为列表，每个元素是文件的一行
            lines = file.readlines()

            # 倒序遍历列表，以实现逆序读取每行
            for line in reversed(lines):
                # 移除每行末尾的换行符并打印
                print(line.rstrip())        






if __name__ == "__main__":

    import asyncio

 

    # android/app/src/main/res/drawable-v21/background_b01.webp
    # android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_b03.webp
    #  <string name="app_name_c26">MAE777</string>

    # <style name="LaunchTheme_c26" parent="@android:style/Theme.Black.NoTitleBar">
    #     <item name="android:windowBackground">@drawable/launch_background_c26</item>
    #     <item name="android:forceDarkAllowed">false</item>
    #     <item name="android:windowFullscreen">false</item>
    # </style>

        # 新增渠道
    targe = 'c555'
    appName = 'app名字'
    # 定义源文件
    source_folder = './sourceBuildApk'
    # 目标文件路径   
    android_res = './android/app/src/main/res'

    # 接口域名    
    apiList = [
                'slotswin999.com'
               ]


    # 源文件的路径

  
    # 修改文件内容方法
    def read_file(filename, stop_word,insert):
        # 打开文件，读取内容为字符串列表
        with open(filename, 'r') as file:
            lines = file.readlines()

        # 遍历文件内容
        for i, line in enumerate(lines):
            line = line.strip()  # 移除行尾换行符等空白字符

            # 如果遇到指定字符，插入指定文本并停止读取
            if stop_word in line:
                lines.insert(i, "\n")
                lines.insert(i,insert)
              
                break

        # 将修改后的内容写回文件
        with open(filename, 'w') as file:
            file.writelines(lines)

    # 调用函数来读取和修改文件

    values_string = f'\t<string name="app_name_{targe}">{appName}</string>'
    read_file('./android/app/src/main/res/values/string.xml', '</resources>',values_string)


#    <style name="LaunchTheme_c26" parent="@android:style/Theme.Black.NoTitleBar">
#         <item name="android:windowBackground">@drawable/launch_background_c26</item>
#         <item name="android:forceDarkAllowed">false</item>
#         <item name="android:windowFullscreen">false</item>
#     </style>

    styleLine_1 = values_styles = f'\t<style name="LaunchTheme_{targe}" parent="@android:style/Theme.Black.NoTitleBar">\n'
    styleLine_2 = values_styles = f'\t\t<item name="android:windowBackground">@drawable/launch_background_{targe}</item>\n'
    styleLine_3 = values_styles = f'\t\t<item name="android:forceDarkAllowed">false</item>\n'
    styleLine_4 = values_styles = f'\t\t<item name="android:windowFullscreen">false</item>\n'
    styleLine_5 = values_styles = f'\t</style>'

    values_styles = styleLine_1+styleLine_2+styleLine_3+styleLine_4+styleLine_5
    
    read_file('./android/app/src/main/res/values/styles.xml', '</resources>',values_styles)


   













  
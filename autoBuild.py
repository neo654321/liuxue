# -*- coding: utf-8 -*-

import os
import time
import sys
import shutil

 






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


   













  
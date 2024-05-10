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
    apiList = ['slotswin999.com']


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


    launch_background_xml = f'android/app/src/main/res/drawable-v21/launch_background_{targe}.xml'
    
# <?xml version="1.0" encoding="utf-8"?>
# <layer-list xmlns:android="http://schemas.android.com/apk/res/android">
#     <item>
#         <bitmap android:gravity="fill" android:src="@drawable/background_b70"/>
#     </item>
# </layer-list>



    xml_1 = values_styles = f'<?xml version="1.0" encoding="utf-8"?>\n'
    xml_2 = values_styles = f'<layer-list xmlns:android="http://schemas.android.com/apk/res/android">\n'
    xml_3 = values_styles = f'\t<item>\n'
    xml_4 = values_styles = f'\t\t <bitmap android:gravity="fill" android:src="@drawable/background_{targe}"/>\n'
    xml_5 = values_styles = f'\t</item>\n'
    xml_6 = values_styles = f'</layer-list>'

    xml = xml_1+xml_2+xml_3+xml_4+xml_5+xml_6
    # 文件不存在 创建文件,如果存在 先清空文件内容
    with open(launch_background_xml, 'w') as file:
        file.write(xml)
        print("File created and content written.")


   

    configMap = f'\t\t\'{targe}\':{targe},\n'
    read_file('./lib/env.dart', 'ConfigMap-end-targe',configMap)


    configMap = f'\tstatic List<String> {targe}_l ={apiList};'
    read_file('./lib/env.dart', 'api_list_targe',configMap)




#   static final EnvConfig b67 = EnvConfig(
#     "prod",
#     apiUrl: "https://mkkwin.com",
#     wsUrl:"a5175cad3a67d45c9ab0597382790365-1212270961.sa-east-1.elb.amazonaws.com",
#     port: '1883',
#     imgBaseUrl: "https://dl-br.sadslj88.com",
#   );

    EnvConfig_1 = values_styles = f'static final EnvConfig {targe} = EnvConfig(\n'
    EnvConfig_2 = values_styles = f'\t"prod",\n'
    EnvConfig_3 = values_styles = f'\tapiUrl: "{apiList[0]}"\n'
    EnvConfig_4 = values_styles = f'\t wsUrl:"a5175cad3a67d45c9ab0597382790365-1212270961.sa-east-1.elb.amazonaws.com",\n'
    EnvConfig_5 = values_styles = f'\tport: \'1883\',\n'
    EnvConfig_6 = values_styles = f'\timgBaseUrl: "https://dl-br.sadslj88.com",\n'
    EnvConfig_7 = values_styles = f');'

    EnvConfig = EnvConfig_1+EnvConfig_2+EnvConfig_3+EnvConfig_4+EnvConfig_5+EnvConfig_6+EnvConfig_7
    read_file('./lib/env.dart', 'EnvConfig-end',EnvConfig)
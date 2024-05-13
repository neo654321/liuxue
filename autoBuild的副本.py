# -*- coding: utf-8 -*-

import os
import time
import sys
import shutil
import asyncio
import subprocess
from PIL import Image
import urllib.request
 
#需要安装的三方库==》1.图片相关处理 使用 Pillow 库 2.如果是 linux 系统 安装 sudo apt-get install webp  (转 png 的命令行工具)

if __name__ == "__main__":

  
    
    # 新增渠道
    targe = 'c38'
    appName = '我是app名字'
    # 域名列表    
    apiList = ['slotswin999.com']
    them_key= "key ='lancomePeach'"

    #图片下载url
    img_url = 'https://koipg.com'

    logo_image_url   =  f'{img_url}/bxapp/splash/splash_{targe}.webp'
    splash_image_url = f'{img_url}/bxapp/splash/splash_{targe}.webp'

    # 定义源文件
    source_folder = './sourceBuildApk'
    # 目标文件路径   
    android_res = './android/app/src/main/res'
   

 


  
    # 修改文件内容方法
    def read_file(filename, stop_word,insert):
        try:
            with open(filename, 'r') as file:
                lines = file.readlines()
            # 遍历文件内容
            for i, line in enumerate(lines):
                line = line.strip() 

                # 如果遇到指定字符，插入指定文本并停止读取
                if stop_word in line:
                    lines.insert(i, "\n")
                    lines.insert(i,insert)
                    break

            # 将修改后的内容写回文件
            with open(filename, 'w') as file:
                file.writelines(lines)
        except Exception as e:
            print(f"修改文件异常:文件名===>{filename}  *异常为==> {e}")
           

     #拷贝图片
    def copy_to_folder(source_file, targe_folder):
        try:
        # 检查目标文件夹是否存在，如果不存在则创建
            if not os.path.exists(targe_folder):
                os.makedirs(targe_folder)
            # 构建目标文件的完整路径
            destination_file = os.path.join(targe_folder, os.path.basename(source_file))
            
            # 复制文件
            shutil.copy2(source_file, destination_file)
            print(f"{source_file} 已成功复制到 {destination_file}")

        except Exception as e:
            print(f"复制图片到android目录异常: {e}")



    # 下载需要的资源图片
    def download_image(url, save_folder):
        try:
            response = urllib.request.urlopen(url)
            if response.getcode() == 200:
                # 检查保存文件夹是否存在，如果不存在则创建
                if not os.path.exists(save_folder):
                    os.makedirs(save_folder)
                
                # 获取文件名
                filename = url.split("/")[-1]
                # 拼接保存路径
                save_path = os.path.join(save_folder, filename)
                
                # 写入文件
                with open(save_path, 'wb') as f:
                    f.write(response.read())
                
                print(f"下载资源图片成功: {save_path}")
            else:
                print(f"下载资源图片失败:{url}  报错==>{response.getcode()}")

        except urllib.error.URLError as e:
            print(f"下载资源图片异常:{url}  报错==>{e}")
        except Exception as e:
            print(f"保持下载图片异常: {e}")         



   # 打开文件夹 不存在就创建
    def open_or_create_folder(folder_path):
        try:
            os.chdir(folder_path)
            print(f"下载图片保存文件 '{folder_path}' 已经存在.")

        except FileNotFoundError:
            try:
                os.makedirs(folder_path)
                print(f"文件夹 '{folder_path}' 创建成功.")
            except OSError as e:
                print(f"打开或者创建文件失败 '{folder_path}': {e}")




    # 本地保存文件夹路径
    save_folder = "./sourceBuildApk"


    # 下载图片
    # download_image(img_url, save_folder)




    #文件内容修改开始 start
    values_string = f'\t<string name="app_name_{targe}">{appName}</string>'
    read_file('./android/app/src/main/res/values/string.xml', '</resources>',values_string)

    global_theme = f'\t\t\t\t\t\tcase \'{targe}\':'
   
    read_file('./lib/globe_controller.dart', them_key,global_theme)


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


    configMap = f'\tstatic List<String> {targe}_l ={apiList};'
    read_file('./lib/env.dart', 'api_list_targe',configMap)

    configMap = f'\t\t\'{targe}\':{targe},\n'
    read_file('./lib/env.dart', 'ConfigMap-end-targe',configMap)







#   static final EnvConfig b67 = EnvConfig(
#     "prod",
#     apiUrl: "https://mkkwin.com",
#     wsUrl:"a5175cad3a67d45c9ab0597382790365-1212270961.sa-east-1.elb.amazonaws.com",
#     port: '1883',
#     imgBaseUrl: "https://dl-br.sadslj88.com",
#   );

    EnvConfig_1 = values_styles = f'\tstatic final EnvConfig {targe} = EnvConfig(\n'
    EnvConfig_2 = values_styles = f'\t\t"prod",\n'
    EnvConfig_3 = values_styles = f'\t\tapiUrl: {targe}_l[0],\n'
    EnvConfig_4 = values_styles = f'\t\twsUrl:"a5175cad3a67d45c9ab0597382790365-1212270961.sa-east-1.elb.amazonaws.com",\n'
    EnvConfig_5 = values_styles = f'\t\tport: \'1883\',\n'
    EnvConfig_6 = values_styles = f'\t\timgBaseUrl: "https://dl-br.sadslj88.com",\n'
    EnvConfig_7 = values_styles = f'\t);'

    EnvConfig = EnvConfig_1+EnvConfig_2+EnvConfig_3+EnvConfig_4+EnvConfig_5+EnvConfig_6+EnvConfig_7
    read_file('./lib/env.dart', 'EnvConfig-end',EnvConfig)

   #文件内容修改结束 End


   



    #需改图片相关 start

    # 打开 logo 图片
    logo_image = Image.open("./sourceBuildApk/2.png")
    # 增加图像清晰度


    # Android 图标尺寸
    android_sizes = {
        "ldpi": (36, 36),
        "mdpi": (48, 48),
        "hdpi": (72, 72),
        "xhdpi": (96, 96),
        "xxhdpi": (256, 256),
        "xxxhdpi": (192, 192)
    }

    # iOS 图标尺寸
    ios_sizes = {
        "iPhone_App_Icon_29pt": (29, 29),
        "iPhone_App_Icon_40pt": (40, 40),
        "iPhone_App_Icon_60pt": (60, 60),
        "iPhone_App_Icon_76pt": (76, 76),
        "iPhone_App_Icon_83.5pt": (83, 83),
        "iPad_App_Icon_76pt": (76, 76),
        "iPad_App_Icon_83.5pt": (83, 83),
        "iPad_App_Icon_1024pt": (1024, 1024)
    }

    # 创建 Android 和 iOS 文件夹
    os.makedirs("./sourceBuildApk/android", exist_ok=True)
    os.makedirs("./sourceBuildApk/ios", exist_ok=True)


    # 生成 Android 图标
    for density, size in android_sizes.items():
        resized_image = logo_image.resize(size,Image.LANCZOS)
        resized_image.save(f"./sourceBuildApk/android/ic_launcher_{density}.png",quality=100)

    # 生成 iOS 图标
    for name, size in ios_sizes.items():
        resized_image = logo_image.resize(size,Image.LANCZOS)
        resized_image.save(f"./sourceBuildApk/ios/{name}.png",quality=100)


    logo_image.close()







    # # 读取原始logo图像
    # original_logo_path = 'original_logo.png'
    # original_logo = Image.open(original_logo_path)

    # # 定义不同尺寸的logo大小
    # sizes = [(48, 48), (72, 72), (96, 96), (144, 144), (192, 192), (512, 512)]  # 适用于不同的Android应用程序图标尺寸

    # # 生成不同尺寸的logo图像
    # for size in sizes:
    #     resized_logo = original_logo.resize(size, Image.ANTIALIAS)  # 使用抗锯齿算法调整大小
    #     output_path = f'logo_{size[0]}x{size[1]}.png'
    #     resized_logo.save(output_path, quality=95)  # 保存图像并指定质量（0-100之间的值，100表示最高质量）
    #     print(f'Generated logo: {output_path}')

    # # 关闭原始logo图像
    # original_logo.close()





    # 定义 cwebp 命令和参数
    logo_path = f'./sourceBuildApk/ic_launcher_{targe}.webp'
    command = ['cwebp', '-q', '85', './sourceBuildApk/2.png', '-o', logo_path]

    # 执行 cwebp 命令
    result = subprocess.run(command, capture_output=True, text=True)

    # 检查命令执行结果
    if result.returncode == 0:
        print("cwebp 转换成功！")
    else:
        print("cwebp 转换失败！")

    # 复制到指定文件夹
    copy_to_folder(logo_path,'./android/app/src/main/res/mipmap-xxxhdpi')
    # 复制 logo
 
    






    # 复制 启动图

    splash_path = f'./sourceBuildApk/background_{targe}.webp'
    command = ['cwebp', '-q', '85', './sourceBuildApk/1.png', '-o', splash_path]

    # 执行 cwebp 命令
    result = subprocess.run(command, capture_output=True, text=True)

    # 检查命令执行结果
    if result.returncode == 0:
        print("cwebp 转换成功！")
    else:
        print("cwebp 转换失败！")


    copy_to_folder(splash_path,'./android/app/src/main/res/drawable-v21')



    #图片相关处理 使用 Pillow 库
    # 图片文件 -源文件
    # source_file = 'a/1.png'

    # # 图片文件 -目标位置
    # target_file = 'b/1.png'

    # try:
    #     shutil.copyfile(source_file, target_file)
    #     print("文件复制完成！")
    # except Exception as e:
    #     print("文件复制失败:", e)

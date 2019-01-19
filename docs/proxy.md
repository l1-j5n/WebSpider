# 代理

## 配置代理目的

配置代理后进行 HTTP 请求能够很好的隐藏自己服务器的IP地址。因而可以持久的对目标网站进行数据抓取而不用怕自己服务器的IP地址被服务器禁止掉。尤其对 WebSpider 来说，爬虫是面向大众的，隐藏服务器IP异常重要，因为一旦没有配置代理，如果某个用户对某网站数据抓取频率过于频繁，而被其封掉IP，则其他用户也不能对该网站进行数据抓取。

## 代理来源

[西刺代理](https://www.xicidaili.com/)和[FreeProxyList](https://free-proxy-list.net/)

## 代理可用性检测

### 获取代理
首先需要对代理来源网站进行代理的抓取，这里直接调用爬虫模块即可实现，获取代理配置在`/src/data/config.json`文件中，将配置作为参数传入爬虫函数即可。

### 配置
进行检测前需要进行相关配置。配置文件在`/src/config/[dev/prod/test]/proxy.js`。主要配置**timeout**参数与**interval**参数。**timeout**指配置代理后发出请求后等待响应的时间，**interval**指进行代理检测的时间间隔。

### 代理检测
检测代理的原理是将代理地址配置到请求中，检测请求返回的特征数据，如果返回则证明代理可用。应用中对`http://www.ip-api.com/json`进行请求，判断返回值 **status** 是否为 **success**。检测结果将被存查到`/src/data/proxies.json`文件中。

## 代理API路由

应用对检测出的可用高质量代理提供了API接口。
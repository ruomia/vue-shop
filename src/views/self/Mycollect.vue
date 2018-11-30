<template>
    <div>
        <header class="top-header fixed-header">
            <a class="icona" href="javascript:history.go(-1)">
                    <img src="@/assets/images/left.png"/>
                </a>
            <h3>我的收藏</h3>
                
                <a class="text-top">
                    编辑
                </a>
        </header>
        
        <div class="contaniner fixed-conta">
            <div style="margin-top: 3%;"></div>
            <section class="list">
                <ul class="wall">
                    <li class="pic">
                        <a href="detail.html">
                            <img src="@/assets/images/list-ph01.png"/>
                            <p>韩版青少年休闲修身长袖紧身衬衫</p>
                            <b>￥58</b><del>￥538</del>
                            <div class="collectbar">
                                <label for="collect1"  onselectstart="return false" class="label1"></label>
                                <input type="checkbox" onclick="mycheck(1)" id="collect1"/>
                            </div>
                        </a>
                    </li>
                    <li class="pic">
                        <a href="detail.html">
                            <img src="@/assets/images/list-ph02.png"/>
                            <p>韩版青少年休闲修身长袖紧身衬衫</p>
                            <b>￥58</b><del>￥538</del>
                            <div class="collectbar">
                                <label for="collect2"  onselectstart="return false" class="label2"></label>
                                <input type="checkbox" onclick="mycheck(2)" id="collect2"/>
                            </div>
                        </a>
                    </li>
                    <li class="pic">
                        <a href="detail.html">
                            <img src="@/assets/images/list-ph01.png"/>
                            <p>韩版青少年休闲修身长袖紧身衬衫</p>
                            <b>￥58</b><del>￥538</del>
                            <div class="collectbar">
                                <label class="label3" for="collect3" onclick="mycheck(3)" onselectstart="return false"></label>
                                <input type="checkbox" id="collect3"/>
                            </div>
                        </a>
                    </li>
                    <li class="pic">
                        <a href="detail.html">
                            <img src="@/assets/images/list-ph02.png"/>
                            <p>韩版青少年休闲修身长袖紧身衬衫</p>
                            <b>￥58</b><del>￥538</del>
                            <div class="collectbar">
                                <label class="label4" for="collect4" onselectstart="return false"></label>
                                <input type="checkbox" id="collect4" onclick="mycheck(4)"/>
                            </div>
                        </a>
                    </li>
                    
                </ul>
            </section>
            <div class="kong" style="margin-bottom: 16%;"></div>
        </div>
	
    </div>
</template>

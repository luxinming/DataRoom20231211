package com.gccloud.dataroom.core.module.chart.components;

import com.gccloud.dataroom.core.constant.PageDesignConstant;
import com.gccloud.dataroom.core.module.chart.bean.Chart;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 指标卡组件
 * @author hongyang
 * @version 1.0
 * @date 2023/10/7 10:58
 */
@Data
public class ScreenIndicatorCardChart extends Chart {

    @ApiModelProperty(notes = "类型")
    private String type = PageDesignConstant.BigScreen.Type.INDICATOR_CARD;

    @ApiModelProperty(notes = "个性化配置")
    private Customize customize = new Customize();

    @Data
    public static class Customize {

        @ApiModelProperty(notes = "边框圆角")
        private Integer borderRadius;

        @ApiModelProperty(notes = "边框宽度")
        private Integer borderWidth;

        @ApiModelProperty(notes = "边框线距离")
        private Integer lineDistance;

        @ApiModelProperty(notes = "边框颜色")
        private String borderColor;

        @ApiModelProperty(notes = "背景颜色")
        private String bgColor;

        @ApiModelProperty(notes = "第一行字体大小")
        private Integer firstSize;

        @ApiModelProperty(notes = "第一行字体颜色")
        private String firstColor;

        @ApiModelProperty(notes = "第一行字体粗细")
        private Integer firstWeight;

        @ApiModelProperty(notes = "第二行字体大小")
        private Integer secondSize;

        @ApiModelProperty(notes = "第二行字体颜色")
        private String secondColor;

        @ApiModelProperty(notes = "第二行字体粗细")
        private Integer secondWeight;

        @ApiModelProperty(notes = "第二行字体内容")
        private String secondLine;

    }

}

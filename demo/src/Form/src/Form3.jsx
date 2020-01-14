import React, { Component } from 'react';
import { Form, Input, Button, Icon, Radio, Cascader, Switch } from 'zzc-design-mobile';

class MyForm extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            options: [{
                value: 'zhinan',
                label: '指南',
                children: [{
                    value: 'shejiyuanze',
                    label: '设计原则',
                    children: [{
                        value: 'yizhi',
                        label: '一致'
                    }, {
                        value: 'fankui',
                        label: '反馈'
                    }, {
                        value: 'xiaolv',
                        label: '效率'
                    }, {
                        value: 'kekong',
                        label: '可控'
                    }]
                }, {
                    value: 'daohang',
                    label: '导航',
                    children: [{
                        value: 'cexiangdaohang',
                        label: '侧向导航'
                    }, {
                        value: 'dingbudaohang',
                        label: '顶部导航'
                    }]
                }]
            }, {
                value: 'zujian',
                label: '组件',
                children: [{
                    value: 'basic',
                    label: 'Basic',
                    children: [{
                        value: 'layout',
                        label: 'Layout 布局'
                    }, {
                        value: 'color',
                        label: 'Color 色彩'
                    }, {
                        value: 'typography',
                        label: 'Typography 字体'
                    }, {
                        value: 'icon',
                        label: 'Icon 图标'
                    }, {
                        value: 'button',
                        label: 'Button 按钮'
                    }]
                }, {
                    value: 'form',
                    label: 'Form',
                    children: [{
                        value: 'radio',
                        label: 'Radio 单选框'
                    }, {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                    }, {
                        value: 'input',
                        label: 'Input 输入框'
                    }, {
                        value: 'input-number',
                        label: 'InputNumber 计数器'
                    }, {
                        value: 'select',
                        label: 'Select 选择器'
                    }, {
                        value: 'cascader',
                        label: 'Cascader 级联选择器'
                    }, {
                        value: 'switch',
                        label: 'Switch 开关'
                    }, {
                        value: 'slider',
                        label: 'Slider 滑块'
                    }, {
                        value: 'time-picker',
                        label: 'TimePicker 时间选择器'
                    }, {
                        value: 'date-picker',
                        label: 'DatePicker 日期选择器'
                    }, {
                        value: 'datetime-picker',
                        label: 'DateTimePicker 日期时间选择器'
                    }, {
                        value: 'upload',
                        label: 'Upload 上传'
                    }, {
                        value: 'rate',
                        label: 'Rate 评分'
                    }, {
                        value: 'form',
                        label: 'Form 表单'
                    }]
                }, {
                    value: 'data',
                    label: 'Data',
                    children: [{
                        value: 'table',
                        label: 'Table 表格'
                    }, {
                        value: 'tag',
                        label: 'Tag 标签'
                    }, {
                        value: 'progress',
                        label: 'Progress 进度条'
                    }, {
                        value: 'tree',
                        label: 'Tree 树形控件'
                    }, {
                        value: 'pagination',
                        label: 'Pagination 分页'
                    }, {
                        value: 'badge',
                        label: 'Badge 标记'
                    }]
                }, {
                    value: 'notice',
                    label: 'Notice',
                    children: [{
                        value: 'alert',
                        label: 'Alert 警告'
                    }, {
                        value: 'loading',
                        label: 'Loading 加载'
                    }, {
                        value: 'message',
                        label: 'Message 消息提示'
                    }, {
                        value: 'message-box',
                        label: 'MessageBox 弹框'
                    }, {
                        value: 'notification',
                        label: 'Notification 通知'
                    }]
                }, {
                    value: 'navigation',
                    label: 'Navigation',
                    children: [{
                        value: 'menu',
                        label: 'NavMenu 导航菜单'
                    }, {
                        value: 'tabs',
                        label: 'Tabs 标签页'
                    }, {
                        value: 'breadcrumb',
                        label: 'Breadcrumb 面包屑'
                    }, {
                        value: 'dropdown',
                        label: 'Dropdown 下拉菜单'
                    }, {
                        value: 'steps',
                        label: 'Steps 步骤条'
                    }]
                }, {
                    value: 'others',
                    label: 'Others',
                    children: [{
                        value: 'dialog',
                        label: 'Dialog 对话框'
                    }, {
                        value: 'tooltip',
                        label: 'Tooltip 文字提示'
                    }, {
                        value: 'popover',
                        label: 'Popover 弹出框'
                    }, {
                        value: 'card',
                        label: 'Card 卡片'
                    }, {
                        value: 'carousel',
                        label: 'Carousel 走马灯'
                    }, {
                        value: 'collapse',
                        label: 'Collapse 折叠面板'
                    }]
                }]
            }, {
                value: 'ziyuan',
                label: '资源',
                children: [{
                    value: 'axure',
                    label: 'Axure Components'
                }, {
                    value: 'sketch',
                    label: 'Sketch Templates'
                }, {
                    value: 'jiaohu',
                    label: '组件交互文档'
                }]
            }],
            selectData: {
                visible: false,
                title: '驾照类型',
                data: [
                    {
                        text: '中国驾照',
                        type: 'active',
                        value: 'code1'
                    },
                    {
                        text: '中国驾照+国际驾照翻译认证件',
                        type: 'normal',
                        value: 'code2'
                    },
                    {
                        text: '中国驾照+英文公证件',
                        type: 'normal',
                        value: 'code3'
                    },
                    {
                        text: '香港驾照',
                        type: 'normal',
                        value: 'code4'
                    },
                    {
                        text: '台湾驾照',
                        type: 'normal',
                        value: 'code5'
                    },
                    {
                        text: '其他驾照',
                        type: 'normal',
                        value: 'code6',
                        click: ( item, key, next ) => {
                            next( '日本驾照' );
                        }
                    },
                    {
                        text: '中国驾照+车行翻译件 (不支持)',
                        type: 'disabled',
                        value: 'code7'
                    }
                ]
            }
        };
    }

    onSubmit ( data ) {
        console.log( data );
    }

    onChangeCascader = ( val ) => {
        this.props.form.setFormAssignValue( 'cascader', val, true );
    }

    onChangeSwitch ( value ) {
        this.props.form.setFormAssignValue( 'switch', value ? 1 : 0 );
    }

    render () {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Item
                    label='switch组件使用'
                    htmlFor='text'
                    clearBtn
                    extra={<Switch onChange={( value ) => { this.onChangeSwitch( value ); }} />}
                >
                    {this.props.form.getFieldDecorator( 'switch', {}, <Input placeholder='请输入普通文本' htmlType='hidden' readOnly /> )}
                    <p className='wechat_text'>关注微信有好礼</p>
                </Form.Item>
                <Form.Item
                    label='联动选中'
                    htmlFor='text'
                    clearBtn
                    extra={<Icon type='arrows' />}
                    onClick={() => this.setState( { visible: true } )}
                >
                    {this.props.form.getFieldDecorator( 'cascader', {
                        valueTranslate: ( value ) => {
                            return value ? '经过转换的值' : value;
                        },
                        rules: [
                            {
                                required: true,
                                message: '信息不能为空'
                            }
                        ]
                    }, <Input placeholder='请输入普通文本' readOnly /> )}
                </Form.Item>
                <Cascader
                    visible={this.state.visible}
                    options={this.state.options}
                    onClose={() => this.setState( { visible: false } )}
                    onChange={this.onChangeCascader}
                />
                <Form.Item
                    label='生日日期'
                    extra={<Icon type='arrows' />}
                >
                    {this.props.form.getFieldDecorator( 'born', {
                        isShowSuccess: true,
                        successText: '验证成功',
                        validateTrigger: 'onChange',
                        rules: [
                            {
                                required: true,
                                message: '必须选择生日日期'
                            },
                            {
                                message: '必须年满18岁',
                                validationFn: ( data ) => {
                                    const born = new Date( data ).getTime();
                                    const now = Date.now();
                                    return ( now - born ) >= 567648000000;
                                }
                            }
                        ]
                    }, <Input.DatePicker
                        datePickerData={{
                            minDate: '1960/1/1',
                            maxDate: new Date()
                        }}
                        timeFormat='YYYY-MM-DD'
                        placeholder='请选择日期'
                    />
                    )}
                </Form.Item>
                <Form.Item
                    label='驾照类型'
                    extra={<Icon type='arrows' />}
                >
                    {this.props.form.getFieldDecorator( 'car_license', {
                        isShowSuccess: true,
                        successText: '验证成功',
                        validateTrigger: 'onChange',
                        initialValue: {
                            selectData: this.state.selectData,
                            value: null
                        },
                        rules: [
                            {
                                message: '驾照必须选择',
                                validationFn: ( data ) => {
                                    if ( data.value == null || data.value === '' ) return false;
                                    return true;
                                }
                            }
                        ]
                    }, <Input.Select placeholder='请选择驾照类型' />
                    )}
                </Form.Item>
                <Form.Item
                    label='手机号码'
                >
                    {this.props.form.getFieldDecorator( 'phoneNum', {
                        isShowSuccess: true,
                        successText: '验证成功',
                        initialValue: {
                            phonePrefix: '+86',
                            value: ''
                        },
                        rules: [
                            {
                                message: '手机前缀不能为空',
                                validationFn: ( data ) => {
                                    if ( !data.phonePrefix || data.phonePrefix == '' ) return false;
                                    return true;
                                }
                            },
                            {
                                message: '手机号不能为空',
                                validationFn: ( data ) => {
                                    if ( !data.value || data.value == '' ) return false;
                                    return true;
                                }
                            }
                        ]
                    }, <Input showPhonePrefix inputType='phone' placeholder='请输入手机号' /> )}
                </Form.Item>
                <Form.Item
                    label='单选'
                    htmlFor='sex'
                >
                    {this.props.form.getFieldDecorator( 'sex_text', {
                        isShowSuccess: true,
                        successText: '验证成功',
                        grounp: 'sex',
                        rules: [
                            {
                                required: true,
                                message: '性别文案不能为空'
                            }
                        ]
                    }, <Input placeholder='性别文案' /> )}
                    {this.props.form.getFieldDecorator( 'sex', {
                        initialValue: 'man',
                        grounp: 'sex',
                        rules: [
                            {
                                required: true,
                                message: '必选选择一个性别'
                            }
                        ]
                    }, <Radio.RadioGrounp
                        radioType='sex'
                    >
                        <Radio id='man'>先生</Radio>
                        <Radio id='women'>女士</Radio>
                    </Radio.RadioGrounp> )}
                </Form.Item>
                <Form.Item
                    label='普通文本'
                    htmlFor='text'
                    clearBtn
                >
                    {this.props.form.getFieldDecorator( 'text_1', {
                        rules: [
                            {
                                required: true,
                                message: '信息不能为空'
                            }
                        ]
                    }, <Input placeholder='请输入普通文本' /> )}
                </Form.Item>
                <Form.Item
                    label='姓名'
                    htmlFor='name_1'
                    extra={<Icon type='change_user' />}
                >
                    {this.props.form.getFieldDecorator( 'name_1', {
                        isShowSuccess: true,
                        successText: '验证成功',
                        grounp: 'name',
                        rules: [
                            {
                                required: true,
                                message: '姓拼音不能为空'
                            }
                        ],
                        formOnChange: ( value ) => {
                            console.log( 'formOnChange', value );
                        }
                    }, <Input placeholder='姓拼音' /> )}
                    {this.props.form.getFieldDecorator( 'name_2', {
                        isShowSuccess: true,
                        successText: '验证成功',
                        grounp: 'name',
                        rules: [
                            {
                                required: true,
                                message: '名拼音不能为空'
                            }
                        ]
                    }, <Input placeholder='名拼音' /> )}
                </Form.Item>
                <Form.Item
                    label='普通多行文本'
                    htmlFor='label1'
                    style={{ alignItems: 'self-end' }}
                >
                    {this.props.form.getFieldDecorator( 'label1', {
                        rules: [
                            {
                                required: true,
                                message: '信息不能为空'
                            },
                            {
                                max: 10,
                                message: '长度不能超过10个字符'
                            }
                        ]
                    }, <Input.Textarea autoHeight placeholder='请输入普通多行文本' /> )}
                </Form.Item>
                <Form.Item>
                    <Button htmlType='submit'>
                        提交
                    </Button>
                </Form.Item>
            </Form> );
    }
}
export default Form.create( MyForm );



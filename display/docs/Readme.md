### Set view to Stack

```xml
<userio event="click">
    <layout_mode deck_set="Default" deck_id="0" slot_id="0">
        <translation action_on="press" behaviour="toggle">
            <alias name="Stack" value="0"/>
            <alias name="Stack" value="127"/>
        </translation>
    </layout_mode>
</userio>
```

### Set preferred widgets On

```xml
<userio event="click">
    <quantize deck_set="Default" deck_id="0" slot_id="0">
        <translation action_on="press" behaviour="toggle"/>
    </quantize>
    <quantize deck_set="Default" deck_id="1" slot_id="0">
        <translation action_on="press" behaviour="toggle"/>
    </quantize>
    <quantize deck_set="Default" deck_id="2" slot_id="0">
        <translation action_on="press" behaviour="toggle"/>
    </quantize>
    <quantize deck_set="Default" deck_id="3" slot_id="0">
        <translation action_on="press" behaviour="toggle"/>
    </quantize>
    <widget_mode deck_set="Default" deck_id="0" slot_id="4">
        <translation action_on="press" behaviour="toggle"/>
    </widget_mode>
    <widget_mode deck_set="Default" deck_id="0" slot_id="3">
        <translation action_on="press" behaviour="toggle"/>
    </widget_mode>
</userio>
```

### Beat Jump step down

```xml
<case>
    <condition>
        <beat_jump_step deck_set="Default" deck_id="0" slot_id="6" operator="equal" cmp_value="on"/>
    </condition>
    <userio event="click">
        <beat_jump_step deck_set="Default" deck_id="0" slot_id="5">
            <translation action_on="press" behaviour="explicit"/>
        </beat_jump_step>
    </userio>
</case>
<case>
<condition>
    <beat_jump_step deck_set="Default" deck_id="0" slot_id="7" operator="equal" cmp_value="on"/>
</condition>
<userio event="click">
    <beat_jump_step deck_set="Default" deck_id="0" slot_id="6">
        <translation action_on="press" behaviour="explicit"/>
    </beat_jump_step>
</userio>
</case>
<case>
<condition>
    <beat_jump_step deck_set="Default" deck_id="0" slot_id="8" operator="equal" cmp_value="on"/>
</condition>
<userio event="click">
    <beat_jump_step deck_set="Default" deck_id="0" slot_id="7">
        <translation action_on="press" behaviour="explicit"/>
    </beat_jump_step>
</userio>
</case>
<case>
<condition>
    <beat_jump_step deck_set="Default" deck_id="0" slot_id="9" operator="equal" cmp_value="on"/>
</condition>
<userio event="click">
    <beat_jump_step deck_set="Default" deck_id="0" slot_id="8">
        <translation action_on="press" behaviour="explicit"/>
    </beat_jump_step>
</userio>
</case>
<case>
<condition>
    <beat_jump_step deck_set="Default" deck_id="0" slot_id="10" operator="equal" cmp_value="on"/>
</condition>
<userio event="click">
    <beat_jump_step deck_set="Default" deck_id="0" slot_id="9">
        <translation action_on="press" behaviour="explicit"/>
    </beat_jump_step>
</userio>
</case>
```

### Beat jump step up

```xml
<case>
    <condition>
        <beat_jump_step deck_set="Default" deck_id="0" slot_id="5" operator="equal" cmp_value="on"/>
    </condition>
    <userio event="click">
        <beat_jump_step deck_set="Default" deck_id="0" slot_id="6">
            <translation action_on="press" behaviour="explicit"/>
        </beat_jump_step>
    </userio>
</case>
<case>
<condition>
    <beat_jump_step deck_set="Default" deck_id="0" slot_id="6" operator="equal" cmp_value="on"/>
</condition>
<userio event="click">
    <beat_jump_step deck_set="Default" deck_id="0" slot_id="7">
        <translation action_on="press" behaviour="explicit"/>
    </beat_jump_step>
</userio>
</case>
<case>
<condition>
    <beat_jump_step deck_set="Default" deck_id="0" slot_id="7" operator="equal" cmp_value="on"/>
</condition>
<userio event="click">
    <beat_jump_step deck_set="Default" deck_id="0" slot_id="8">
        <translation action_on="press" behaviour="explicit"/>
    </beat_jump_step>
</userio>
</case>
<case>
<condition>
    <beat_jump_step deck_set="Default" deck_id="0" slot_id="8" operator="equal" cmp_value="on"/>
</condition>
<userio event="click">
    <beat_jump_step deck_set="Default" deck_id="0" slot_id="9">
        <translation action_on="press" behaviour="explicit"/>
    </beat_jump_step>
</userio>
</case>
<case>
<condition>
    <beat_jump_step deck_set="Default" deck_id="0" slot_id="9" operator="equal" cmp_value="on"/>
</condition>
<userio event="click">
    <beat_jump_step deck_set="Default" deck_id="0" slot_id="10">
        <translation action_on="press" behaviour="explicit"/>
    </beat_jump_step>
</userio>
</case>
```

### Light switching for beat step

```xml

  <control channel="15" event_type="Note On" control="100">
    <case>
      <condition>
        <beat_jump_step deck_set="Default" deck_id="2" slot_id="8" operator="equal" cmp_value="on"/>
      </condition>
      <userio event="output">
        <beat_jump_step deck_set="Default" deck_id="2" slot_id="8">
          <translation action_on="any">
            <alias name="on" value="127"/>
            <alias name="off" value="0"/>
          </translation>
        </beat_jump_step>
      </userio>
    </case>
    <case>
      <condition>
        <beat_jump_step deck_set="Default" deck_id="2" slot_id="9" operator="equal" cmp_value="on"/>
      </condition>
      <userio event="output">
        <beat_jump_step deck_set="Default" deck_id="2" slot_id="10">
          <translation action_on="any">
            <alias name="on" value="127"/>
            <alias name="off" value="0"/>
          </translation>
        </beat_jump_step>
      </userio>
    </case>
    <case>
      <condition>
        <beat_jump_step deck_set="Default" deck_id="2" slot_id="10" operator="equal" cmp_value="on"/>
      </condition>
      <userio event="output">
        <beat_jump_step deck_set="Default" deck_id="2" slot_id="10">
          <translation action_on="any">
            <alias name="on" value="127"/>
            <alias name="off" value="0"/>
          </translation>
        </beat_jump_step>
      </userio>
    </case>
  </control>
```
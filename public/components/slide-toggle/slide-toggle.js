"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var field_value_1 = require('@angular2-material/core/annotations/field-value');
var Observable_1 = require('rxjs/Observable');
exports.MD_SLIDE_TOGGLE_VALUE_ACCESSOR = {
    provide: common_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MdSlideToggle; }),
    multi: true
};
// A simple change event emitted by the MdSlideToggle component.
var MdSlideToggleChange = (function () {
    function MdSlideToggleChange() {
    }
    return MdSlideToggleChange;
}());
exports.MdSlideToggleChange = MdSlideToggleChange;
// Increasing integer for generating unique ids for slide-toggle components.
var nextId = 0;
var MdSlideToggle = (function () {
    function MdSlideToggle(_elementRef, _renderer) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        // A unique id for the slide-toggle. By default the id is auto-generated.
        this._uniqueId = "md-slide-toggle-" + ++nextId;
        this._checked = false;
        this._hasFocus = false;
        this._isMousedown = false;
        this.disabled = false;
        this.name = null;
        this.id = this._uniqueId;
        this.tabIndex = 0;
        this.ariaLabel = null;
        this.ariaLabelledby = null;
        this._change = new core_1.EventEmitter();
        this.change = this._change.asObservable();
        // Returns the unique id for the visual hidden input.
        this.getInputId = function () { return ((_this.id || _this._uniqueId) + "-input"); };
    }
    /**
     * The onChangeEvent method will be also called on click.
     * This is because everything for the slide-toggle is wrapped inside of a label,
     * which triggers a onChange event on click.
     * @internal
     */
    MdSlideToggle.prototype.onChangeEvent = function (event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the component's `change` output.
        event.stopPropagation();
        if (!this.disabled) {
            this.toggle();
        }
    };
    /** @internal */
    MdSlideToggle.prototype.setMousedown = function () {
        var _this = this;
        // We only *show* the focus style when focus has come to the button via the keyboard.
        // The Material Design spec is silent on this topic, and without doing this, the
        // button continues to look :active after clicking.
        // @see http://marcysutton.com/button-focus-hell/
        this._isMousedown = true;
        setTimeout(function () { return _this._isMousedown = false; }, 100);
    };
    /** @internal */
    MdSlideToggle.prototype.onInputFocus = function () {
        // Only show the focus / ripple indicator when the focus was not triggered by a mouse
        // interaction on the component.
        if (!this._isMousedown) {
            this._hasFocus = true;
        }
    };
    /** @internal */
    MdSlideToggle.prototype.onInputBlur = function () {
        this._hasFocus = false;
        this.onTouched();
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdSlideToggle.prototype.writeValue = function (value) {
        this.checked = value;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdSlideToggle.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdSlideToggle.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    Object.defineProperty(MdSlideToggle.prototype, "checked", {
        get: function () {
            return !!this._checked;
        },
        set: function (value) {
            if (this.checked !== !!value) {
                this._checked = value;
                this.onChange(this._checked);
                this._emitChangeEvent();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlideToggle.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._updateColor(value);
        },
        enumerable: true,
        configurable: true
    });
    MdSlideToggle.prototype.toggle = function () {
        this.checked = !this.checked;
    };
    MdSlideToggle.prototype._updateColor = function (newColor) {
        this._setElementColor(this._color, false);
        this._setElementColor(newColor, true);
        this._color = newColor;
    };
    MdSlideToggle.prototype._setElementColor = function (color, isAdd) {
        if (color != null && color != '') {
            this._renderer.setElementClass(this._elementRef.nativeElement, "md-" + color, isAdd);
        }
    };
    MdSlideToggle.prototype._emitChangeEvent = function () {
        var event = new MdSlideToggleChange();
        event.source = this;
        event.checked = this.checked;
        this._change.emit(event);
    };
    __decorate([
        core_1.Input(),
        field_value_1.BooleanFieldValue(), 
        __metadata('design:type', Boolean)
    ], MdSlideToggle.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdSlideToggle.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdSlideToggle.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MdSlideToggle.prototype, "tabIndex", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdSlideToggle.prototype, "ariaLabel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdSlideToggle.prototype, "ariaLabelledby", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Observable_1.Observable)
    ], MdSlideToggle.prototype, "change", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdSlideToggle.prototype, "checked", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdSlideToggle.prototype, "color", null);
    MdSlideToggle = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'md-slide-toggle',
            host: {
                '[class.md-checked]': 'checked',
                '[class.md-disabled]': 'disabled',
                // This md-slide-toggle prefix will change, once the temporary ripple is removed.
                '[class.md-slide-toggle-focused]': '_hasFocus',
                '(click)': 'onTouched()',
                '(mousedown)': 'setMousedown()'
            },
            templateUrl: 'slide-toggle.html',
            styleUrls: ['slide-toggle.css'],
            providers: [exports.MD_SLIDE_TOGGLE_VALUE_ACCESSOR],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MdSlideToggle);
    return MdSlideToggle;
}());
exports.MdSlideToggle = MdSlideToggle;
exports.MD_SLIDE_TOGGLE_DIRECTIVES = [MdSlideToggle];
//# sourceMappingURL=/Users/C-Styles/Code/repos/material2/tmp/broccoli_type_script_compiler-input_base_path-BUu8SwQ0.tmp/0/components/slide-toggle/slide-toggle.js.map
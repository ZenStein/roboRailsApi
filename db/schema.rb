# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160325214149) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "carts", force: :cascade do |t|
    t.integer  "num_items"
    t.float    "total"
    t.float    "grand_total"
    t.float    "tax"
    t.text     "item_storage", default: "[{\"name\": \"name\", \"id\": 0, \"price\": 0.0, \"quantity\": 0, \"image_url\": \"http://i47.tinypic.com/dx0g11.jpg\"}]"
    t.integer  "user_id"
    t.datetime "created_at",                                                                                                                                        null: false
    t.datetime "updated_at",                                                                                                                                        null: false
  end

  create_table "carts_items", force: :cascade do |t|
    t.integer "item_id"
    t.integer "cart_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "categories_items", force: :cascade do |t|
    t.integer  "category_id"
    t.integer  "item_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "items", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.float    "price"
    t.string   "image_url"
    t.integer  "quantity"
    t.integer  "itemable_id"
    t.string   "itemable_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "items", ["itemable_type", "itemable_id"], name: "index_items_on_itemable_type_and_itemable_id", using: :btree

  create_table "items_orders", force: :cascade do |t|
    t.integer "quantity"
    t.integer "order_id"
    t.integer "item_id"
  end

  add_index "items_orders", ["item_id"], name: "index_items_orders_on_item_id", using: :btree
  add_index "items_orders", ["order_id"], name: "index_items_orders_on_order_id", using: :btree

  create_table "orders", force: :cascade do |t|
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: :cascade do |t|
    t.string   "first_name",                    null: false
    t.string   "last_name",                     null: false
    t.string   "email",                         null: false
    t.string   "password_hash",                 null: false
    t.boolean  "admin",         default: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree

end

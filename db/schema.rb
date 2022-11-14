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

ActiveRecord::Schema.define(version: 20221014000455) do

  create_table "indicators", force: :cascade do |t|
    t.string "value"
    t.string "category"
    t.integer "pulse_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pulse_id"], name: "index_indicators_on_pulse_id"
  end

  create_table "industries", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "pulse_id"
    t.index ["pulse_id"], name: "index_industries_on_pulse_id"
  end

  create_table "malware_families", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "pulse_id"
    t.index ["pulse_id"], name: "index_malware_families_on_pulse_id"
  end

  create_table "pulses", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "description"
    t.string "author_name"
    t.string "tlp"
    t.string "adversary"
    t.string "name"
  end

  create_table "references", force: :cascade do |t|
    t.string "resource"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "pulse_id"
    t.index ["pulse_id"], name: "index_references_on_pulse_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "title"
    t.integer "pulse_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pulse_id"], name: "index_tags_on_pulse_id"
  end

  create_table "targeted_countries", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "pulse_id"
    t.index ["pulse_id"], name: "index_targeted_countries_on_pulse_id"
  end

end

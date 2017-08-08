<?php
/**
 * Created by PhpStorm.
 * User: Vitaly
 * Date: 08.08.2017
 * Time: 15:39
 */

require_once($CFG->dirroot . "/mod/folder/renderer.php");

class theme_fordson_mod_folder_renderer extends mod_folder_renderer {
    // place your overridden methods (functions) here.

    public function render_folder_tree(folder_tree $tree) {
        static $treecounter = 0;

        $content = '';
        $id = 'folder_tree'. ($treecounter++);
        $content .= '<div id="'.$id.'" class="filemanager">';
        $content .= $this->htmllize_tree($tree, array('files' => array(), 'subdirs' => array($tree->dir)));
        $content .= '</div>';
        $showexpanded = true;
        if (empty($tree->folder->showexpanded)) {
            $showexpanded = false;
        }
        $module = [
            'name'=>'mod_folder',
            'fullpath'=>'/theme/fordson/javascript/mod_folder.js',
            'requires' => [],
        ];
        $this->page->requires->js_init_call('M.mod_folder.init_tree', array($id, $showexpanded), false, $module);
        //$this->page->requires->js_init_call('M.mod_folder.init_tree_exp', array($id, $showexpanded));
        //$this->page->requires->js_init_code('M.mod_folder.init_tree_exp', array($id, $showexpanded));
        return $content;
    }

}
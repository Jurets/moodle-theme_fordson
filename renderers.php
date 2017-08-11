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
        $module = [ // we have to put own module config array to renderer - to revent 'module.js' file loading!!!
            'name'=>'mod_folder',
            'fullpath'=>'/theme/fordson/javascript/mod_folder.js',
            'requires' => [],
        ];
        $this->page->requires->js_init_call('M.mod_folder.init_tree', array($id, $showexpanded), false, $module);
        return $content;
    }

}

require_once($CFG->dirroot . "/mod/quiz/renderer.php");

class theme_fordson_mod_quiz_renderer extends mod_quiz_renderer {

    public function review_page(quiz_attempt $attemptobj, $slots, $page, $showall,
                                $lastpage, mod_quiz_display_options $displayoptions,
                                $summarydata) {

        $output = '';
        $output .= $this->header();
        $output .= $this->review_summary_table($summarydata, $page);
        $output .= $this->review_form($page, $showall, $displayoptions,
            $this->questions($attemptobj, true, $slots, $page, $showall, $displayoptions),
            $attemptobj);

        $output .= $this->review_next_navigation($attemptobj, $page, $lastpage, $showall);
        $this->page->requires->js('/theme/fordson/javascript/bicycle.js',false);
        $output .= $this->footer();
        return $output;
    }
}